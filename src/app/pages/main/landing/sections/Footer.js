import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	backButton: {
		background: theme.palette.primaryGradient
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className="w-full">
			<Divider />

			<div className="flex justify-around items-center p-24 pb-0">
				{/* column 1 */}
				<div className="flex flex-col justify-center items-center">
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Youtube" />
						</ListItem>
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Line" />
						</ListItem>
					</List>
				</div>
				{/* column 2 */}
				<div className="flex flex-col justify-center items-center">
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Instagram" />
						</ListItem>
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Twitter" />
						</ListItem>
					</List>
				</div>
				{/* column 3 */}
				<div className="flex flex-col justify-center items-center">
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Email" />
						</ListItem>
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="contact" />
						</ListItem>
					</List>
				</div>
				{/* column 4 */}
				<div className="flex flex-col justify-center items-center">
					<List component="nav" aria-label="main mailbox folders">
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="Email" />
						</ListItem>
						<ListItem button classes={{ button: 'rounded-8' }}>
							<ListItemText primary="contact" />
						</ListItem>
					</List>
				</div>
			</div>
		</div>
	);
};

export default Footer;
