import React, { useState } from 'react';
import { Smartphone, Monitor, ArrowDown } from 'react-feather';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
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
import UAParser from 'ua-parser-js';

const COLUMNS = [
	{
		id: 'action',
		title: '操作紀錄'
	},
	{
		id: 'browser',
		title: '瀏覽器'
	},
	{
		id: 'country',
		title: '來源地區'
	},
	{
		id: 'ip',
		title: '來源 IP'
	},
	{
		id: 'createdAt',
		title: '時間'
	}
];

const renderActionIcon = action => {
	const ACTION_TABLE = {
		'/auth/login': (
			<div className="text-14 bg-blue text-white inline text-11 font-500 px-8 py-4 rounded-8">登入</div>
		),
		'/auth/access-token': (
			<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">更新憑證</div>
		),
		'/auth/reset-password': (
			<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">更新密碼</div>
		),
		'/auth/forgot-password': (
			<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">發起更新</div>
		),
		'/api/users': (
			<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">使用 API</div>
		),
		default: <div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">查詢</div>
	};
	return ACTION_TABLE[action] || ACTION_TABLE.default;
};

const renderUADetail = UAInfo => {
	const uaParser = new UAParser();
	const { browser, device, os } = uaParser.setUA(UAInfo).getResult();

	if (device.type === 'mobile') {
		return (
			<Typography
				className={clsx('inline text-12 font-500 px-8 py-4 rounded-4 whitespace-no-wrap flex items-center')}
			>
				<Smartphone size={18} className="mr-8" />
				{`${device.vendor} ${device.model}`}
			</Typography>
		);
	}
	return (
		<Typography
			className={clsx('inline text-12 font-500 px-8 py-4 rounded-4 whitespace-no-wrap flex items-center')}
		>
			<Monitor size={18} className="mr-8" />
			{`${browser.name} V${browser.version} (${os.name} ${os.version})`}
		</Typography>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
	}
}));

const AccessHistoryCard = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));
	const [tableExtend, setTableExtend] = useState(false);

	const ACCESS_HISTORY = useSelector(({ profile }) => profile.accessHistory);

	return (
		<Grow in>
			<div className="flex justify-center mx-16 sm:mx-24 pt-12">
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
							{ACCESS_HISTORY.loading ? (
								<>
									<Skeleton animation="wave" className="h-64 rounded-8" />
									<Skeleton animation="wave" className="h-64 rounded-8" />
									<Skeleton animation="wave" className="h-64 rounded-8" />
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
										{ACCESS_HISTORY.data.slice(0, tableExtend ? -1 : 5).map(doc => (
											<TableRow
												key={doc._id}
												hover
												className="py-12"
												classes={{ root: 'rounded-8 whitespace-no-wrap' }}
											>
												<TableCell component="th" scope="row">
													{renderActionIcon(doc.action)}
												</TableCell>
												<TableCell component="th" scope="row">
													{renderUADetail(doc.browser)}
												</TableCell>
												<TableCell component="th" scope="row">
													<Typography className={classes.countryCell}>
														{doc.country}
													</Typography>
												</TableCell>
												<TableCell component="th" scope="row">
													<Typography className={classes.ipCell}>{doc.ip}</Typography>
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
			</div>
		</Grow>
	);
};

export default AccessHistoryCard;
