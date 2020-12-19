import React, { useState } from 'react';
import { User, HelpCircle, Mail } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import clsx from 'clsx';
import Editor from 'rich-markdown-editor';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		flex: 2,
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	chartRoot: {
		width: 'calc(100% + 2.4rem)'
	}
}));

function WidgetCommodityInsightSetting(props) {
	const classes = useStyles(props);
	const [content, setContent] = useState('');

	return (
		<FuseAnimate delay={100}>
			<div className={clsx(classes.root, 'rounded-8 p-16 mx-16 mb-0')}>
				<div className="px-8 flex justify-between items-center">
					<Typography className="h1 font-medium">新商品介紹</Typography>
					<Tooltip
						arrow
						title="新商品介紹"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</Tooltip>
				</div>

				<div className="w-full min-h-320 flex flex-col justify-center items-start pt-16 pb-12 mt-24">
					<Editor className="w-full" defaultValue="寫一些商品介紹吧！" value={content} dark />
				</div>
			</div>
		</FuseAnimate>
	);
}

export default React.memo(WidgetCommodityInsightSetting);
