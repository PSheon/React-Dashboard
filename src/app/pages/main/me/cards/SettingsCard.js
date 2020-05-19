import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { User, Mail } from 'react-feather';

import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import DotLoader from 'app/fuse-layouts/shared-components/DotLoader';

const SettingsCard = () => {
	return (
		<Grow in>
			<div className="w-full p-24 mb-20 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-start text-center">
					<Typography className="h2">未完成</Typography>

					<Typography color="textSecondary">Please check back later.</Typography>
				</div>

				<Divider className="w-full my-20" />

				{/* Detail */}
				<div className="w-full flex flex-col justify-center items-center text-center mt-12 mb-20">
					<CssTextField
						label="您的顯示名稱"
						className="bg-bgDefault rounded-8 mb-20"
						InputProps={{
							inputProps: {
								'aria-label': '您的顯示名稱'
							},
							endAdornment: (
								<InputAdornment position="end" classes={{ root: 'p-12' }}>
									<User size={18} />
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>

					<CssTextField
						label="您的信箱"
						className="bg-bgDefault rounded-8 mb-20"
						InputProps={{
							inputProps: {
								'aria-label': '您的信箱'
							},
							endAdornment: (
								<InputAdornment position="end" classes={{ root: 'p-12' }}>
									<Mail size={18} />
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>

					<div className="w-full flex justify-center items-center mt-12 mb-16 pl-12 pr-24">
						<div className="flex-1">
							<Typography className="h3 text-left">信箱驗證狀態</Typography>
						</div>
						<div className="flex-1">
							<DotLoader className="ml-auto" width={16} height={16} colorSchema="secondary" />
						</div>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default SettingsCard;
