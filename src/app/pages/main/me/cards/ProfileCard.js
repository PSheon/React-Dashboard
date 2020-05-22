import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Edit, User, Mail, Smartphone } from 'react-feather';

import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import DotLoader from 'app/fuse-layouts/shared-components/DotLoader';

const useStyles = makeStyles(theme => ({
	editButton: {
		background: theme.palette.primaryGradient
	}
}));

const ProfileCard = () => {
	const classes = useStyles();
	// TODO 改 redux 中 auth、profile 位置
	const ME_DATA = useSelector(({ profile }) => profile.me.data);

	return (
		<Grow in>
			<div className="w-full md:w-2/5 flex justify-center sm:pr-12 mb-20">
				<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8">
					<img
						className="w-full h-216 -mx-24 -mt-24 object-center object-cover"
						alt="使用者頭像"
						src="assets/images/logos/fuse.svg"
						title="使用者頭像"
					/>

					{/* Title */}
					<div className="w-full mt-20 flex justify-between items-start text-center">
						<Typography className="h2 mb-16">我的資訊</Typography>

						{ME_DATA.email && (
							<Typography color="textSecondary" className="mb-40">
								{ME_DATA.email}
							</Typography>
						)}
					</div>

					{/* Detail */}
					<div className="w-full flex flex-col justify-center items-center text-center mt-12 mb-20">
						<CssTextField
							label="我的顯示名稱"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '我的顯示名稱'
								},
								defaultValue: ME_DATA.displayName,
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
							label="我的信箱"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '我的信箱'
								},
								readOnly: true,
								defaultValue: ME_DATA.email,
								endAdornment: (
									<InputAdornment position="end" classes={{ root: 'p-12' }}>
										<Mail size={18} />
									</InputAdornment>
								)
							}}
							variant="outlined"
							fullWidth
						/>

						<CssTextField
							label="我的手機"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '我的手機'
								},
								defaultValue: ME_DATA.phone,
								endAdornment: (
									<InputAdornment position="end" classes={{ root: 'p-12' }}>
										<Smartphone size={18} />
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
								{ME_DATA.verified ? (
									<DotLoader className="ml-auto" width={16} height={16} colorSchema="green" />
								) : (
									<DotLoader className="ml-auto" width={16} height={16} colorSchema="warning" />
								)}
							</div>
						</div>
					</div>

					{/* Submit */}
					<div className="w-full flex justify-center items-center text-center">
						<Button
							variant="contained"
							startIcon={<Edit width={16} />}
							className={clsx(classes.editButton, 'rounded-8 font-medium text-14 text-white px-36')}
						>
							修改
						</Button>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default ProfileCard;
