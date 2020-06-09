import React from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const COLUMNS = [
	{
		id: 'memberId',
		title: '推薦好友'
	},
	{
		id: 'status',
		title: '推薦狀態'
	},
	{
		id: 'createdAt',
		title: '推薦日期'
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
	}
}));

const DownlineCard = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const ACCESS_HISTORY = useSelector(({ profile }) => profile.accessHistory);

	return (
		<Grow in>
			<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8 mb-24">
				{/* Title */}
				<div className="w-full flex justify-between items-center text-center">
					<Typography className="h2">推薦列表</Typography>

					<div className="flex justify-center">
						{smUp && (
							<Button className="py-8 px-12 rounded-8" size="small" disabled>
								全部推薦
							</Button>
						)}
						<Button className="py-8 px-12 rounded-8" size="small">
							已同意
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
									{ACCESS_HISTORY.data.slice(0, 5).map(doc => (
										<TableRow
											key={doc._id}
											hover
											className="py-12"
											classes={{ root: 'rounded-8 whitespace-no-wrap' }}
										>
											<TableCell component="th" scope="row">
												<Typography className={classes.memberCell}>{doc.member}</Typography>
											</TableCell>
											<TableCell component="th" scope="row">
												<Typography className={classes.statusCell}>{doc.status}</Typography>
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

export default DownlineCard;
