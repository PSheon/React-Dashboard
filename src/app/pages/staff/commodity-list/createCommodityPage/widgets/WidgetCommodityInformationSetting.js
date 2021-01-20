import React, { useState } from 'react';
import { User, HelpCircle, Mail } from 'react-feather';

import FuseAnimate from '@fuse/core/FuseAnimate';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import clsx from 'clsx';

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

function WidgetCommodityInformationSetting(props) {
	const classes = useStyles(props);
	const [commodityDisplayName, setCommodityDisplayName] = useState('');
	const [commodityCodeName, setCommodityCodeName] = useState('');

	return (
		<FuseAnimate delay={100}>
			<div className={clsx(classes.root, 'rounded-8 p-16 mx-16 mb-8 sm:mt-0')}>
				<div className="px-8 flex justify-between items-center">
					<Typography className="h1 font-medium">新商品資訊</Typography>
					<Tooltip
						arrow
						title="新商品資訊"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</Tooltip>
				</div>

				<div className="w-full flex flex-col justify-center items-start mt-24">
					<Typography className="pb-12 text-gray-300 font-600">
						完整的顯示名稱會加深用戶對商品的第一印象，此欄位不可與其他商品重複
					</Typography>
					<CssTextField
						label="新商品顯示名稱"
						className="bg-bgDefault rounded-8 mb-20"
						InputProps={{
							inputProps: {
								'aria-label': '新商品顯示名稱'
							},
							defaultValue: commodityDisplayName,
							endAdornment: (
								<InputAdornment position="end" classes={{ root: 'p-12' }}>
									<User size={18} />
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>

					<Typography className="pb-12 text-gray-300 font-600">
						清楚、簡短的代號會加深用戶對商品的記憶，此欄位不可與其他代號重複
					</Typography>
					<CssTextField
						label="新商品專屬 Code"
						className="bg-bgDefault rounded-8 mb-20"
						InputProps={{
							inputProps: {
								'aria-label': '新商品專屬 Code'
							},
							defaultValue: commodityCodeName,
							endAdornment: (
								<InputAdornment position="end" classes={{ root: 'p-12' }}>
									<Mail size={18} />
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default React.memo(WidgetCommodityInformationSetting);
