import React, { useState } from 'react';
import { Info, XCircle, Bell } from 'react-feather';
import { Link } from 'react-router-dom';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CssAvatarBadge from 'app/fuse-layouts/shared-components/CssAvatarBadge';
import StrategyBasicCard from 'app/fuse-layouts/shared-components/StrategyBasicCard';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	// root: {
	// 	// background: theme.palette.background.paper,
	// 	flex: 2,
	// 	margin: '2rem',
	// 	borderRadius: '.8rem',
	// 	transitionProperty: 'box-shadow, border-color',
	// 	transitionDuration: theme.transitions.duration.short,
	// 	transitionTimingFunction: theme.transitions.easing.easeInOut,
	// 	'&:hover': {
	// 		boxShadow: theme.shadows[6]
	// 	}
	// }
}));

const WidgetStrategyMetrics = props => {
	const classes = useStyles(props);
	const [isWatch, setIsWatch] = useState(false);

	return (
		<div className="flex flex-row flex-wrap sm:mb-0 px-8 sm:px-0">
			<div className="widget flex w-1/2 sm:w-1/4 p-8 sm:p-16">
				<StrategyBasicCard title="交易所" content="BitForex" iconType="exchange" iconColorSchema="primary" />
			</div>
			<div className="widget flex w-1/2 sm:w-1/4 p-8 sm:p-16">
				<StrategyBasicCard
					title="使用幣種"
					content="BTC/ETH"
					iconType="dollar-sign"
					iconColorSchema="primary"
				/>
			</div>
			<div className="widget flex w-1/2 sm:w-1/4 p-8 sm:p-16">
				<StrategyBasicCard title="盈利比例" content="72.3%" iconType="target" iconColorSchema="success" />
			</div>
			<div className="widget flex w-1/2 sm:w-1/4 p-8 sm:p-16">
				<StrategyBasicCard title="使用者" content="226" iconType="users" iconColorSchema="secondary" />
			</div>
		</div>
	);
};

export default WidgetStrategyMetrics;
