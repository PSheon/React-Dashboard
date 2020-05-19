import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
	root: {},
	seperator: {
		backgroundColor: '#d6dce1'
	}
}));

function FuseBreadcrumbs(props) {
	const classes = useStyles();

	const { pathname } = props.location;

	const pathnames = pathname.split('/').filter(path => path);
	const pathnameList = pathnames.slice(0, -1);
	const currentPathTitle = pathnames.slice(-1);

	return (
		<div className={clsx(classes.root, 'flex items-center h-64 mt-16 mb-20')}>
			<Hidden xsUp>
				<Typography className="h1" color="textPrimary">
					{currentPathTitle}
				</Typography>
			</Hidden>

			<Hidden xsDown>
				<Typography className="h1" color="textPrimary">
					{currentPathTitle}
				</Typography>

				<Divider orientation="vertical" className={clsx(classes.seperator, 'h-28 w-1 mx-20')} />

				<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="頁面導覽">
					<Link color="primary" to="/" className={classes.link}>
						<HomeIcon className={classes.icon} />
					</Link>
					{pathnameList.map(item => (
						<Link color="primary" to={`/${item}`} className={classes.link} key={`pathnameList_${item}`}>
							{item}
						</Link>
					))}
					<Typography color="textPrimary" className={classes.link}>
						{currentPathTitle}
					</Typography>
				</Breadcrumbs>
			</Hidden>
		</div>
	);
}

export default React.memo(FuseBreadcrumbs);
