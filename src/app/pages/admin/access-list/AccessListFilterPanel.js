import React from 'react';
import { XCircle, Mail, Phone } from 'react-feather';
import { useSelector } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		color: 'red'
	}
}));

function AccessListFilterPanel(props) {
	// const user = useSelector(({ contactsApp }) => contactsApp.user);

	const classes = useStyles(props);

	return (
		<div className="p-0 lg:p-16 lg:ltr:pr-4 lg:rtl:pl-4">
			<FuseAnimate animation="transition.slideLeftIn" delay={200}>
				<Paper className="rounded-0 lg:rounded-8">
					<div className="px-12 py-16 flex justify-between items-center">
						<Typography className="mx-12 font-semibold h2">篩選操作記錄</Typography>

						<IconButton
							key="filter"
							aria-label="篩選操作記錄"
							className="p-4 mr-0 sm:mr-4"
							color="inherit"
							size="small"
							onClick={() => {
								props.pageLayout.current.toggleRightSidebar();
							}}
						>
							<XCircle className="px-8" size={36} />
						</IconButton>
					</div>
					<Divider />
					<div className="px-12 py-16 justify-center items-start">
						<Typography className="mx-12 font-400 h3">搜尋範圍</Typography>
						<div className="flex flex-wrap justify-around items-center py-12">
							<Avatar variant="rounded" className="bg-green">
								<Mail size={36} />
							</Avatar>
							<Avatar variant="rounded" className="bg-green">
								<Phone size={36} />
							</Avatar>
							<Avatar variant="rounded" className="bg-green">
								<XCircle size={36} />
							</Avatar>
						</div>

						<Typography className="mx-12 font-400 h3">篩選條件</Typography>
					</div>
				</Paper>
			</FuseAnimate>
		</div>
	);
}

export default AccessListFilterPanel;
