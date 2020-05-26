import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import { DollarSign, Moon, Bell } from 'react-feather';

import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';

const currencies = [
	{
		value: 'USD',
		label: '美金 $'
	},
	{
		value: 'EUR',
		label: '歐元 €'
	},
	{
		value: 'BTC',
		label: '比特幣 ฿'
	},
	{
		value: 'TWD',
		label: '新台幣 $'
	}
];

const SettingsCard = () => {
	return (
		<Grow in>
			<div className="w-full p-24 mb-20 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-start text-center">
					<Typography className="h2">網站設定</Typography>

					<Typography color="textSecondary">Please check back later.</Typography>
				</div>

				<Divider className="w-full my-20" />

				{/* Detail */}
				<div className="w-full flex flex-col justify-center items-center text-center mt-12 mb-20">
					<CssTextField
						select
						label="主要貨幣"
						className="bg-bgDefault rounded-8 mb-20"
						InputProps={{
							inputProps: {
								'aria-label': '主要貨幣'
							},
							startAdornment: (
								<InputAdornment position="start" classes={{ root: 'p-12' }}>
									<DollarSign size={18} />
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					>
						{currencies.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</CssTextField>

					<div className="w-full flex justify-center items-center mt-12 mb-16 px-12">
						<div className="flex-1 flex justify-start items-center">
							<Moon size={16} />
							<Typography className="h3 pl-12 text-left">深色主題</Typography>
						</div>
						<div className="flex-1 flex justify-end">
							<Switch checked />
						</div>
					</div>
					<div className="w-full flex justify-center items-center mt-12 mb-16 px-12">
						<div className="flex-1 flex justify-start items-center">
							<Bell size={16} />
							<Typography className="h3 pl-12 text-left">網站通知</Typography>
						</div>
						<div className="flex-1 flex justify-end">
							<Switch checked />
						</div>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default SettingsCard;
