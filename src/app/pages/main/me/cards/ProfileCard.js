import React from 'react';
import { Edit, User, Mail, Smartphone } from 'react-feather';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import decorLeft from 'app/assets/images/profile/decore-left.png';
import decorRight from 'app/assets/images/profile/decore-right.png';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import DotChart from 'app/fuse-layouts/shared-components/DotChart';
import clsx from 'clsx';

import AvatarCrop from './AvatarCrop';

const useStyles = makeStyles(theme => ({
	reactBadge: {
		backgroundColor: theme.palette.background.paper,
		color: '#61DAFB'
	},
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
				<div className="w-full p-24 flex flex-col justify-center items-center bg-bgPaper rounded-8 relative">
					<img src={decorLeft} alt="card-img-left" className="absolute w-2/5 top-0 left-0" />
					<img src={decorRight} alt="card-img-right" className="absolute w-2/5 top-0 right-0" />

					<AvatarCrop />

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
							label="我的備用信箱"
							className="bg-bgDefault rounded-8 mb-20"
							InputProps={{
								inputProps: {
									'aria-label': '我的備用信箱'
								},
								defaultValue: ME_DATA.secondary_email,
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
									<DotChart className="ml-auto" width={16} height={16} colorSchema="green" />
								) : (
									<DotChart className="ml-auto" width={16} height={16} colorSchema="warning" />
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
