import React, { useState } from 'react';
import { Search, Filter } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import { useDebouncedCallback } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import LoadingIcon from 'app/fuse-layouts/shared-components/LoadingIcon';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	filterWrapper: {
		color: theme.palette.gray.light,
		padding: 0,
		'&:hover': {
			background: fade(theme.palette.background.default, 0.8)
		},
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 2.2s 3 ease-in-out',
			border: '3px solid currentColor',
			content: '""'
		}
	},
	backButton: {
		background: theme.palette.primaryGradient
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(1.2)',
			opacity: 0
		}
	}
}));

function AccessListHeader(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const searchText = useSelector(({ accessList }) => accessList.routeParams.filter);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const [localSearchText, setLocalSearchText] = useState('');
	const [islocalSearchLoading, setIsLocalSearchingLoading] = useState(false);

	const [debouncedCallback] = useDebouncedCallback(
		newSearchText => {
			setIsLocalSearchingLoading(false);
			setLocalSearchText(newSearchText);
			dispatch(
				Actions.setAccessListSearchRouteParams({
					filter: newSearchText,
					page: 1
				})
			);
		},
		// delay in 800 ms
		800
	);

	return (
		<div className="flex flex-col flex-1 items-start justify-between p-8 sm:px-24 sm:py-16">
			<FuseAnimate animation="transition.slideUpIn">
				<Breadcrumbs
					classes={{ padding: 'p-16' }}
					breadCrumbTitle="操作紀錄"
					breadCrumbs={[{ title: '網站管理' }, { title: '操作紀錄', isActive: true }]}
				/>
			</FuseAnimate>

			<div className="w-full flex flex-1 items-center justify-between">
				{smUp && (
					<Typography
						className="h2 font-semibold pl-8 sm:pl-12 pr-24 whitespace-no-wra"
						color="textSecondary"
					>
						尋找操作紀錄
					</Typography>
				)}

				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Paper
						className="flex p-4 items-center w-full max-w-440 h-48 py-12 px-8 rounded-8 hover:shadow-xl"
						elevation={1}
					>
						{islocalSearchLoading ? (
							<LoadingIcon className="px-8" height={36} width={36} />
						) : (
							<Search className="px-8" size={36} />
						)}

						<Input
							placeholder="尋找操作紀錄"
							className="flex flex-1 mx-8"
							disableUnderline
							fullWidth
							defaultValue={searchText || localSearchText}
							inputProps={{
								'aria-label': '尋找操作紀錄'
							}}
							onChange={event => {
								setIsLocalSearchingLoading(true);
								debouncedCallback(event.target.value);
							}}
						/>

						{!smUp && (
							<IconButton
								key="filter"
								aria-label="篩選操作紀錄"
								className={clsx(classes.filterWrapper, 'w-36 h-36 mr-0 sm:mr-4')}
								color="inherit"
								size="small"
								onClick={() => {
									props.pageLayout.current.toggleRightSidebar();
								}}
							>
								<Filter className="px-8" size={36} />
							</IconButton>
						)}
					</Paper>
				</FuseAnimate>

				{smUp && (
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Button
							variant="contained"
							startIcon={<Filter width={16} />}
							className={clsx(
								classes.backButton,
								'h-48 rounded-8 font-medium text-14 text-white my-12 ml-24 px-36 whitespace-no-wrap'
							)}
							onClick={() => {
								props.pageLayout.current.toggleRightSidebar();
							}}
						>
							篩選操作紀錄
						</Button>
					</FuseAnimate>
				)}
			</div>
		</div>
	);
}

export default AccessListHeader;
