import React from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import UAParser from 'ua-parser-js';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
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
import { Smartphone, Monitor } from 'react-feather';

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
	switch (action) {
		case 'login':
			return <div className="text-14 bg-blue text-white inline text-11 font-500 px-8 py-4 rounded-8">登入</div>;
		case 'refresh':
			return (
				<div className="text-14 bg-green text-white inline text-11 font-500 px-8 py-4 rounded-8">更新憑證</div>
			);
		case 'change-password':
		default:
			return (
				<div className="text-14 bg-warning text-white inline text-11 font-500 px-8 py-4 rounded-8">
					更換密碼
				</div>
			);
	}
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

const ClaimHistoryCard = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const ACCESS_HISTORY = useSelector(({ profile }) => profile.accessHistory);

	return (
		<Grow in>
			<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-center text-center">
					<Typography className="h2">領獎紀錄</Typography>

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
									{ACCESS_HISTORY.data.map(doc => (
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
												<Typography className={classes.countryCell}>{doc.country}</Typography>
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
				</div>
			</div>
		</Grow>
	);
};

export default ClaimHistoryCard;
