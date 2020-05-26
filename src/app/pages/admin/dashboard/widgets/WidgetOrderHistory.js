import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import humanizeDuration from 'humanize-duration';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { ArrowDown } from 'react-feather';

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
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
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
	const [tableExtend, setTableExtend] = useState(false);

	const ORDER_HISTORY = [
		{
			memberId: '123',
			action: 'renew',
			createdAt: new Date()
		},
		{
			memberId: '1234',
			action: 'renew',
			createdAt: new Date()
		},
		{
			memberId: '1235',
			action: 'renew',
			createdAt: new Date()
		}
	];

	return (
		<Grow in>
			<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-center text-center">
					<Typography className="h2">登入紀錄</Typography>

					<div className="flex justify-center">
						{smUp && (
							<Button className="py-8 px-12 rounded-8" size="small" disabled>
								更新憑證
							</Button>
						)}
						<Button className="py-8 px-12 rounded-8" size="small" disabled>
							更換密碼
						</Button>
						<Button className="py-8 px-12 rounded-8" size="small">
							更新憑證
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
													{humanizeDuration(moment(doc.createdAt).diff(moment()), {
														largest: 2,
														language: 'zh_TW',
														round: true
													})}{' '}
													前
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
			{/* <div className="flex justify-center mx-16 sm:mx-24 pt-12">
			</div> */}
		</Grow>
	);
};

export default WidgetOrderHistory;
