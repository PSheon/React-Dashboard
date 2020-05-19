import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import { Link2 } from 'react-feather';

const useStyles = makeStyles(theme => ({
	googleLinkButton: {
		background: theme.palette.warningGradient
	},
	lineLinkButton: {
		background: theme.palette.successGradient
	}
}));

const SocialLinksCard = () => {
	const classes = useStyles();

	return (
		<Grow in>
			<div className="w-full p-24 mb-20 flex flex-col justify-center items-center bg-bgPaper rounded-8">
				{/* Title */}
				<div className="w-full flex justify-between items-start text-center">
					<Typography className="h2">社群登入</Typography>

					<Typography color="textSecondary">Please check back later.</Typography>
				</div>

				<Divider className="w-full my-20" />

				{/* Detail */}
				<div className="w-full flex flex-col justify-center items-center text-center">
					<div className="w-full flex justify-center items-center mt-12 mb-16 pl-12">
						<div className="flex-1">
							<div className="flex flex-col">
								<Typography className="h3 text-left">Googel</Typography>
								<Typography className="text-14 text-left font-300" color="textSecondary">
									Googel ID
								</Typography>
							</div>
						</div>
						<div className="ml-auto">
							<Button
								variant="contained"
								startIcon={<Link2 width={16} />}
								className={clsx(classes.googleLinkButton, 'rounded-8 font-medium text-14 text-white ')}
							>
								綁定 Googel
							</Button>
						</div>
					</div>

					<div className="w-full flex justify-center items-center mt-12 mb-16 pl-12">
						<div className="flex-1">
							<div className="flex flex-col">
								<Typography className="h3 text-left">Line</Typography>
								<Typography className="text-14 text-left font-300" color="textSecondary">
									Line ID
								</Typography>
							</div>
						</div>
						<div className="m1-auto">
							<Button
								variant="contained"
								startIcon={<Link2 width={16} />}
								className={clsx(classes.lineLinkButton, 'rounded-8 font-medium text-14 text-white')}
							>
								綁定 Line
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Grow>
	);
};

export default SocialLinksCard;
