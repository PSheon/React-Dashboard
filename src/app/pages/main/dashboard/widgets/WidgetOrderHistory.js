import React, { useState } from 'react';
import { ArrowDown } from 'react-feather';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Skeleton from '@material-ui/lab/Skeleton';
import clsx from 'clsx';
import moment from 'moment';

const COLUMNS = [
	{
		id: 'memberId',
		title: '會員ID'
	},
	{
		id: 'photoURL',
		title: ''
	},
	{
		id: 'action',
		title: '訂閱內容'
	},
	{
		id: 'createdAt',
		title: '時間'
	}
];

const renderActionIcon = action => {
	switch (action) {
		case 'renew':
			return <div className="text-14 bg-blue text-white inline text-11 font-500 px-8 py-4 rounded-8">續訂</div>;
		case 'new':
			return (
				<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">新加入</div>
			);
		case 'submit-contract':
		default:
			return (
				<div className="text-14 bg-warning text-white inline text-11 font-500 px-8 py-4 rounded-8">
					更新合約
				</div>
			);
	}
};

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	avatarWrapper: {
		height: 24,
		width: 24
	}
}));

const WidgetOrderHistory = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));
	// const { data: accessHistory, error } = useSWR('/api/profile/access-history', query => axios.post(query));
	const [tableExtend, setTableExtend] = useState(false);

	// const ACCESS_HISTORY = useSelector(({ profile }) => profile.accessHistory);
	const ORDER_HISTORY = [
		{
			memberId: 'u4236901',
			action: 'new',
			createdAt: new Date('2020/08/05')
		},
		{
			memberId: 'u4236900',
			action: 'renew',
			createdAt: new Date('2020/08/03')
		},
		{
			memberId: 'u4236899',
			action: 'renew',
			createdAt: new Date('2020/08/01')
		},
		{
			memberId: 'u4236898',
			action: 'renew',
			createdAt: new Date('2020/07/29')
		},
		{
			memberId: 'u4236897',
			action: 'renew',
			createdAt: new Date('2020/07/28')
		},
		{
			memberId: 'u4236896',
			action: 'new',
			createdAt: new Date('2020/07/25')
		},
		{
			memberId: 'u4236895',
			action: 'submit-contract',
			createdAt: new Date('2020/07/25')
		},
		{
			memberId: 'u4236892',
			action: 'renew',
			createdAt: new Date('2020/07/14')
		},
		{
			memberId: 'u4236894',
			action: 'new',
			createdAt: new Date('2020/07/20')
		},
		{
			memberId: 'u4236893',
			action: 'renew',
			createdAt: new Date('2020/07/19')
		}
	];

	return (
		<div
			className={clsx(classes.root, 'w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8')}
		>
			{/* Title */}
			<div className="w-full flex justify-between items-center text-center">
				<Typography className="h1 text-semibold">訂單紀錄</Typography>

				<div className="flex justify-center">
					{smUp && (
						<Button className="py-8 px-12 rounded-8" size="small" disabled>
							更新方案
						</Button>
					)}
					<Button className="py-8 px-12 rounded-8" size="small" disabled>
						新加入戶
					</Button>
					<Button className="py-8 px-12 rounded-8" size="small">
						更新方案
					</Button>
				</div>
			</div>

			<Divider className="w-full mt-16 mb-24" />

			{/* Detail */}
			<div className="w-full flex flex-col justify-center items-center text-center mb-20">
				<Paper className="w-full rounded-8 shadow-none border-none table-responsive">
					{ORDER_HISTORY.loading ? (
						<>
							<Skeleton animation="wave" className="h-36 rounded-8" />
							<Skeleton animation="wave" className="h-36 rounded-8" />
							<Skeleton animation="wave" className="h-36 rounded-8" />
						</>
					) : (
						<Table className="w-full min-w-full">
							<TableHead>
								<TableRow>
									{COLUMNS.map(column => (
										<TableCell key={column.id} className="whitespace-no-wrap">
											{column.title}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{ORDER_HISTORY.slice(0, tableExtend ? -1 : 5).map(doc => (
									<TableRow
										key={doc.memberId}
										hover
										className="py-12"
										classes={{ root: 'rounded-8 whitespace-no-wrap' }}
									>
										<TableCell component="th" scope="row">
											{doc.memberId}
										</TableCell>
										<TableCell component="th" scope="row">
											<Avatar
												alt="Remy Sharp"
												src="/static/images/avatar/1.jpg"
												className={classes.avatarWrapper}
											/>
										</TableCell>
										<TableCell component="th" scope="row">
											{renderActionIcon(doc.action)}
										</TableCell>
										<TableCell component="th" scope="row">
											<Typography className={classes.createdAtCell}>
												{moment(doc.createdAt).fromNow()}
											</Typography>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
				</Paper>
				{/* TODO Fix Here */}
				<div className="w-full flex justify-center item-center">
					{!tableExtend && (
						<IconButton
							aria-label="開啟列表"
							className="p-12"
							color="inherit"
							size="small"
							onClick={() => setTableExtend(true)}
						>
							<ArrowDown size={18} />
						</IconButton>
					)}
				</div>
			</div>
		</div>
	);
};

export default WidgetOrderHistory;
