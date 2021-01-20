import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from 'react-table';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Checkbox from '@material-ui/core/Checkbox';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import UserListTablePaginationActions from './UserListTablePaginationActions';

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return (
		<>
			<Checkbox ref={resolvedRef} {...rest} />
		</>
	);
});

const EnhancedTable = ({ columns, data, loading, totalUsers, totalPages, onRowClick }) => {
	const dispatch = useDispatch();
	const routeParams = useSelector(({ userList }) => userList.routeParams);

	const {
		getTableProps,
		headerGroups,
		prepareRow,
		page,
		// gotoPage,
		setPageSize,
		state: { pageIndex: currentPageIndex, pageSize: currentPageSize }
	} = useTable(
		{
			columns,
			data,
			initialState: { pageSize: routeParams.limit, pageIndex: routeParams.page - 1 }, // Pass our hoisted table state
			manualPagination: true,
			pageCount: totalPages
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect,
		hooks => {
			hooks.allColumns.push(_columns => [
				// Let's make a column for selection
				{
					id: 'selection',
					sortable: false,
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox.  Pagination is a problem since this will select all
					// rows even though not all rows are on the current page.  The solution should
					// be server side pagination.  For one, the clients should not download all
					// rows in most cases.  The client should only download data for the current page.
					// In that case, getToggleAllRowsSelectedProps works fine.
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
						<div>
							<IndeterminateCheckbox
								{...row.getToggleRowSelectedProps()}
								onClick={ev => ev.stopPropagation()}
							/>
						</div>
					)
				},
				..._columns
			]);
		}
	);

	const handleChangePage = (event, nextPageIndex) => {
		// gotoPage(nextPageIndex);
		dispatch(Actions.setUserListSearchRouteParams({ ...routeParams, page: nextPageIndex + 1 }));
	};

	const handleChangeRowsPerPage = event => {
		setPageSize(Number(event.target.value));
	};

	// Render the UI for your table
	return (
		<div className="flex flex-col min-h-full">
			<TableContainer className="flex flex-1">
				{loading && (
					<FuseAnimate animation="transition.slideUpIn">
						<div className="absolute w-full h-full flex justify-center items-center">
							<LoadingIcon height={64} width={64} />
						</div>
					</FuseAnimate>
				)}
				<MaUTable {...getTableProps()} stickyHeader>
					<TableHead>
						{headerGroups.map(headerGroup => (
							<TableRow {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<TableCell
										className={clsx(
											'whitespace-no-wrap p-12 border-lightGray',
											column.headerClassName
										)}
										{...(!column.sortable
											? column.getHeaderProps()
											: column.getHeaderProps(column.getSortByToggleProps()))}
									>
										{column.render('Header')}
										{column.sortable ? (
											<TableSortLabel
												active={column.isSorted}
												// react-table has a unsorted state which is not treated here
												direction={column.isSortedDesc ? 'desc' : 'asc'}
											/>
										) : null}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<TableRow
									{...row.getRowProps()}
									onClick={ev => onRowClick(ev, row)}
									className="truncate cursor-pointer rounded-8 transition ease-in duration-150 transform hover:-translate-y-2"
								>
									{row.cells.map(cell => {
										return (
											<TableCell
												{...cell.getCellProps()}
												className={clsx('p-12 border-none', cell.column.className)}
											>
												{cell.render('Cell')}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</MaUTable>
			</TableContainer>
			<TablePagination
				component="div"
				classes={{
					root: 'overflow-hidden border-none',
					spacer: 'w-0 max-w-0'
				}}
				SelectProps={{
					inputProps: { 'aria-label': '每頁資料筆數' },
					native: false
				}}
				rowsPerPage={currentPageSize}
				rowsPerPageOptions={[]}
				// rowsPerPageOptions={[5, 10, 25, { label: 'All', value: data.length + 1 }]}
				labelDisplayedRows={({ from, to, count }) => `第 ${from} 到 ${to} 筆，共 ${count} 筆`}
				labelRowsPerPage="每頁資料數"
				count={totalUsers}
				page={currentPageIndex}
				onChangePage={handleChangePage}
				// onChangeRowsPerPage={handleChangeRowsPerPage}
				ActionsComponent={UserListTablePaginationActions}
			/>
		</div>
	);
};

EnhancedTable.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	onRowClick: PropTypes.func
};

export default EnhancedTable;
