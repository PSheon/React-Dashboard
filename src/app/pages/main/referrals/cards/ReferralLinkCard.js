import React from 'react';
import { Copy, HelpCircle } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';
import * as FuseActions from 'app/store/actions/fuse';
import copy from 'copy-to-clipboard';

const ReferralLinkCard = () => {
	const dispatch = useDispatch();
	const ME_DATA = useSelector(({ profile }) => profile.me.data);

	const handleCopyMemberId = () => {
		copy(ME_DATA.memberId);
		dispatch(FuseActions.showMessage({ message: '已複製會員 ID' }));
	};
	const handleCopyReferralLink = () => {
		copy(`https://domain.com/referrals?from=${ME_DATA.memberId}`);
		dispatch(FuseActions.showMessage({ message: '已複製推薦連結' }));
	};

	return (
		<Grow in>
			<div className="w-full p-24 mb-20 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-start text-center">
					<Typography className="h2">推薦連結</Typography>

					<Tooltip
						arrow
						title="分享推薦連結領取每日獎勵"
						placement="top"
						classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
					>
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</Tooltip>
				</div>

				<Divider className="w-full mt-16 mb-24" />

				{/* Detail */}
				<div className="w-full flex flex-col justify-center items-center text-center">
					<CssTextField
						label="我的會員 ID"
						className="bg-bgDefault rounded-8 mb-36"
						InputProps={{
							inputProps: {
								'aria-label': '我的會員 ID'
							},
							readOnly: true,
							defaultValue: ME_DATA.memberId,
							endAdornment: (
								<InputAdornment position="end">
									<Tooltip title="複製會員 ID">
										<IconButton className="p-4 sm:p-12" onClick={handleCopyMemberId}>
											<Copy size={18} />
										</IconButton>
									</Tooltip>
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>

					<CssTextField
						label="我的推薦連結"
						className="bg-bgDefault rounded-8 mb-12"
						InputProps={{
							inputProps: {
								'aria-label': '我的推薦連結'
							},
							readOnly: true,
							defaultValue: `https://domain.com/referrals?from=${ME_DATA.memberId}`,
							endAdornment: (
								<InputAdornment position="end">
									<Tooltip title="複製推薦連結">
										<IconButton className="p-4 sm:p-12" onClick={handleCopyReferralLink}>
											<Copy size={18} />
										</IconButton>
									</Tooltip>
								</InputAdornment>
							)
						}}
						variant="outlined"
						fullWidth
					/>
				</div>
			</div>
		</Grow>
	);
};

export default ReferralLinkCard;
