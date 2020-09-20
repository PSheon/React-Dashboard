import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CssAvatarBadge from 'app/fuse-layouts/shared-components/CssAvatarBadge';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		margin: '2rem',
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

const WidgetCommodityInfo = props => {
	const classes = useStyles(props);
	const [isWatch, setIsWatch] = useState(false);

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-16 mb-12 sm:mx-24')}>
			<div className="px-16 py-12 flex flex-col sm:flex-row justify-between">
				<div className="flex justify-start items-center">
					<CssAvatarBadge
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						dotschema="success"
						variant="dot"
					>
						<div className="border-4 p-2 rounded-full">
							<Avatar className="w-36 h-36" alt="user photo" src="author?.photoUrl" />
						</div>
					</CssAvatarBadge>
					<div className="flex flex-col pl-12 truncate">
						<Typography className="text-20 font-bold leading-none mt-8">strategyDisplayname</Typography>
						<Typography className="sm:text-16" color="textSecondary">
							author?.displayName
						</Typography>
					</div>
				</div>

				<div className="pt-24 sm:pt-0 flex justify-center items-center">
					<IconButton
						aria-label="關注商品"
						className="p-12 mr-24 sm:mr-16"
						color="inherit"
						size="small"
						onClick={() => {
							setIsWatch(!isWatch);
						}}
					>
						{isWatch ? <FavoriteIcon fontSize="medium" /> : <FavoriteBorderIcon fontSize="medium" />}
					</IconButton>
					<Button
						variant="contained"
						color="primary"
						className={clsx('normal-case px-24 my-6 sm:my-12 text-16 text-white')}
					>
						交易
					</Button>
				</div>
			</div>
		</div>
	);
};

export default WidgetCommodityInfo;
