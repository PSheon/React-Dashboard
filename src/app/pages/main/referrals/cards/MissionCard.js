import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { Award } from 'react-feather';

import decorLeft from 'app/assets/images/profile/decore-left.png';
import decorRight from 'app/assets/images/profile/decore-right.png';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.primaryGradient
	},
	editButton: {
		background: theme.palette.primaryGradient
	}
}));

const MissionCard = () => {
	const classes = useStyles();
	const ME_DATA = useSelector(({ profile }) => profile.me.data);

	return (
		<Grow in>
			<div
				className={clsx(
					classes.root,
					'w-full p-24 mb-20 flex flex-col justify-center items-center rounded-8 relative'
				)}
			>
				<img src={decorLeft} alt="card-img-left" className="absolute w-2/5 top-0 left-0" />
				<img src={decorRight} alt="card-img-right" className="absolute w-2/5 top-0 right-0" />

				<div className="w-full flex flex-col justify-center items-center text-center py-16">
					<div className="rounded-full">
						<Award className="text-white" size={28} />
					</div>

					<div className="text-center">
						<h1 className="mb-12 text-white">恭喜~ {ME_DATA.displayName}</h1>
						<Typography color="textPrimary">
							你已經成為 <strong>VIP 1</strong>.
						</Typography>
						<Typography color="textSecondary">你可以從每日推薦獲得更多的獎勵.</Typography>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default MissionCard;
