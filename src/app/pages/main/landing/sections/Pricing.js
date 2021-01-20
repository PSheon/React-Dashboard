import React from 'react';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	header: {
		height: 600,
		color: theme.palette.primary.contrastText
	},
	pricingButton: {
		background: theme.palette.primaryGradient
	},
	badgeWrapper: {
		left: '50%',
		top: '-18px',
		transform: 'translateX(-50%)',
		zIndex: 1
	},
	badge: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.getContrastText(theme.palette.error.main)
	},
	price: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	}
}));

function Pricing(props) {
	const classes = useStyles(props);

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={200}>
			<div className="w-full">
				<div className={clsx(classes.header, 'flex')}>
					<div className="p-24 w-full max-w-2xl mx-auto">
						<div className="text-center my-128 mx-24">
							<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
								<Typography variant="h2" color="inherit" className="font-light">
									定價！
								</Typography>
							</FuseAnimate>

							<FuseAnimate duration={400} delay={600}>
								<Typography
									variant="subtitle1"
									color="inherit"
									className="opacity-75 mt-16 mx-auto max-w-512"
								>
									最合理的價格與最完善的工具。還可以免費試用 7 天！
								</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>

				<div className="-mt-64 sm:-mt-192">
					<div className="w-full max-w-2xl mx-auto">
						<FuseAnimateGroup
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
							className="flex items-center justify-center flex-wrap px-24"
						>
							<div className="w-full max-w-320 sm:w-2/7">
								<Card className="relative">
									<div className="p-32 text-center">
										<Typography className="text-32">小資族</Typography>
										<Typography color="textSecondary" className="text-16 font-medium">
											專為小額投資者設計
										</Typography>
									</div>

									<CardContent className="text-center p-0">
										<div
											className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}
										>
											<div className="flex justify-center">
												<Typography color="inherit" className="font-medium">
													$
												</Typography>
												<Typography
													color="inherit"
													className="text-32 mx-4 font-light leading-none"
												>
													680
												</Typography>
											</div>
											<Typography color="inherit" className="mx-4">
												每月
											</Typography>
										</div>

										<div className="flex flex-col p-32">
											<Typography color="textSecondary" className="mb-16">
												1 AI 投資顧問
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												1 AI 投資顧問
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												1 AI 投資顧問
											</Typography>
											<Typography color="textSecondary">24 / 7 技術支援</Typography>
										</div>
									</CardContent>

									<div className="flex flex-col items-center justify-center pb-32 px-32">
										<Button
											variant="contained"
											className={clsx(classes.pricingButton, 'w-full text-white')}
										>
											免費試用
										</Button>
										<Typography color="textSecondary" className="mt-16">
											7 天免費試用期
										</Typography>
									</div>
								</Card>
							</div>

							<div className="w-full max-w-360 sm:w-3/7 border-4 rounded-8 border-secondary">
								<div
									className={clsx(
										classes.badgeWrapper,
										'absolute rounded-full bg-secondary text-white py-4 px-12'
									)}
								>
									最佳銷售
								</div>
								<Card className="relative" raised>
									<div className="p-32 text-center">
										<Typography className="text-32">Pro</Typography>
										<Typography color="textSecondary" className="text-16 font-medium">
											專為專業投資者設計
										</Typography>
									</div>

									<CardContent className="text-center p-0">
										<div
											className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}
										>
											<div className="flex justify-center">
												<Typography color="inherit" className="font-medium">
													$
												</Typography>
												<Typography
													color="inherit"
													className="text-32 mx-4 font-light leading-none"
												>
													1880
												</Typography>
											</div>
											<Typography color="inherit" className="mx-4">
												每月
											</Typography>
										</div>

										<div className="flex flex-col p-32">
											<Typography color="textSecondary" className="mb-16">
												無限制 AI 投資顧問
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												無限制 AI 投資顧問
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												無限制 AI 投資顧問
											</Typography>
											<Typography color="textSecondary">24 / 7 技術支援</Typography>
											<Typography color="textSecondary">專業報表</Typography>
											<Typography color="textSecondary">客製化介面</Typography>
											<Typography color="textSecondary">即時通知</Typography>
										</div>
									</CardContent>

									<div className="flex flex-col items-center justify-center pb-32 px-32">
										<Button
											variant="contained"
											className={clsx(classes.pricingButton, 'w-full text-white')}
										>
											開始使用
										</Button>
										<Typography color="textSecondary" className="mt-16">
											7 天免費試用期
										</Typography>
									</div>
								</Card>
							</div>

							<div className="w-full max-w-320 sm:w-2/7">
								<Card className="relative">
									<div className="p-32 text-center">
										<Typography className="text-32">Enterprise</Typography>
										<Typography color="textSecondary" className="text-16 font-medium">
											For big teams
										</Typography>
									</div>

									<CardContent className="text-center p-0">
										<div
											className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}
										>
											<div className="flex justify-center">
												<Typography color="inherit" className="font-medium">
													$
												</Typography>
												<Typography
													color="inherit"
													className="text-32 mx-4 font-light leading-none"
												>
													29
												</Typography>
											</div>
											<Typography color="inherit" className="mx-4">
												monthly per user
											</Typography>
										</div>

										<div className="flex flex-col p-32">
											<Typography color="textSecondary" className="mb-16">
												Unlimited projects
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												Unlimited pages
											</Typography>
											<Typography color="textSecondary" className="mb-16">
												Unlimited disk space
											</Typography>
											<Typography color="textSecondary">
												For full feature list, call us
											</Typography>
										</div>
									</CardContent>

									<div className="flex flex-col items-center justify-center pb-32 px-32">
										<Button
											variant="contained"
											className={clsx(classes.pricingButton, 'w-full text-white')}
										>
											CALL US
										</Button>
										<Typography color="textSecondary" className="mt-16">
											90 day free trial to start
										</Typography>
									</div>
								</Card>
							</div>
						</FuseAnimateGroup>
						<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
							<Typography variant="h4" className="pb-32 font-light">
								Frequently Asked Questions
							</Typography>

							<div className="flex flex-wrap w-full text-center">
								<div className="w-full sm:w-1/2 p-24">
									<Typography className="text-20 mb-8">How does free trial work?</Typography>
									<Typography className="text-16" color="textSecondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
										augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
									</Typography>
								</div>

								<div className="w-full sm:w-1/2 p-24">
									<Typography className="text-20 mb-8">Can I cancel any time?</Typography>
									<Typography className="text-16" color="textSecondary">
										Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
										quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
									</Typography>
								</div>

								<div className="w-full sm:w-1/2 p-24">
									<Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
									<Typography className="text-16" color="textSecondary">
										Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
										quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
									</Typography>
								</div>

								<div className="w-full sm:w-1/2 p-24">
									<Typography className="text-20 mb-8">Can I have a discount?</Typography>
									<Typography className="text-16" color="textSecondary">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
										augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default Pricing;
