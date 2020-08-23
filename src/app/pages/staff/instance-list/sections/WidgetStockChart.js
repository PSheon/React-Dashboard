import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import moment from 'moment';
import Chart from 'react-apexcharts';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Settings } from 'react-feather';

const OPTIONS = ({ labelColor, dangerLight, strokeColor, upward, downward, primary }) => ({
	chart: {
		height: 400,
		type: 'candlestick',
		toolbar: {
			show: false
		}
	},
	annotations: {
		xaxis: [
			{
				x: 'Oct 06 14:00',
				borderColor: '#00E396',
				label: {
					borderColor: '#00E396',
					style: {
						fontSize: '12px',
						color: '#fff',
						background: '#00E396'
					},
					orientation: 'horizontal',
					offsetY: 7,
					text: 'Annotation Test'
				}
			}
		]
	},
	tooltip: {
		enabled: true,
		theme: 'dark'
	},
	plotOptions: {
		candlestick: {
			colors: {
				upward,
				downward
			}
		}
	},
	xaxis: {
		type: 'category',
		labels: {
			formatter: function (val) {
				return moment(val).format('MMM DD HH:mm');
			}
		}
	},
	yaxis: {
		tooltip: {
			enabled: true
		}
	}
});
const SERIES = [
	{
		name: 'candle',
		data: [
			{
				x: new Date(1528778600000),
				y: [6629.81, 6650.5, 6623.04, 6633.33]
			},
			{
				x: new Date(1528780400000),
				y: [6632.01, 6643.59, 6620, 6630.11]
			},
			{
				x: new Date(1528782200000),
				y: [6630.71, 6648.95, 6623.34, 6635.65]
			},
			{
				x: new Date(1528784000000),
				y: [6635.65, 6651, 6629.67, 6638.24]
			},
			{
				x: new Date(1528785800000),
				y: [6638.24, 6640, 6620, 6624.47]
			},
			{
				x: new Date(1528787600000),
				y: [6624.53, 6636.03, 6621.68, 6624.31]
			},
			{
				x: new Date(1528789400000),
				y: [6624.61, 6632.2, 6617, 6626.02]
			},
			{
				x: new Date(1528791200000),
				y: [6627, 6627.62, 6584.22, 6603.02]
			},
			{
				x: new Date(1528793000000),
				y: [6605, 6608.03, 6598.95, 6604.01]
			},
			{
				x: new Date(1528794800000),
				y: [6604.5, 6614.4, 6602.26, 6608.02]
			},
			{
				x: new Date(1528796600000),
				y: [6608.02, 6610.68, 6601.99, 6608.91]
			},
			{
				x: new Date(1528798400000),
				y: [6608.91, 6618.99, 6608.01, 6612]
			},
			{
				x: new Date(1528800200000),
				y: [6612, 6615.13, 6605.09, 6612]
			},
			{
				x: new Date(1528802000000),
				y: [6612, 6624.12, 6608.43, 6622.95]
			},
			{
				x: new Date(1528803800000),
				y: [6623.91, 6623.91, 6615, 6615.67]
			},
			{
				x: new Date(1528805600000),
				y: [6618.69, 6618.74, 6610, 6610.4]
			},
			{
				x: new Date(1528807400000),
				y: [6611, 6622.78, 6610.4, 6614.9]
			},
			{
				x: new Date(1528809200000),
				y: [6614.9, 6626.2, 6613.33, 6623.45]
			},
			{
				x: new Date(1528811000000),
				y: [6623.48, 6627, 6618.38, 6620.35]
			},
			{
				x: new Date(1528812800000),
				y: [6619.43, 6620.35, 6610.05, 6615.53]
			},
			{
				x: new Date(1528814600000),
				y: [6615.53, 6617.93, 6610, 6615.19]
			},
			{
				x: new Date(1528816400000),
				y: [6615.19, 6621.6, 6608.2, 6620]
			},
			{
				x: new Date(1528818200000),
				y: [6619.54, 6625.17, 6614.15, 6620]
			},
			{
				x: new Date(1528820000000),
				y: [6620.33, 6634.15, 6617.24, 6624.61]
			},
			{
				x: new Date(1528821800000),
				y: [6625.95, 6626, 6611.66, 6617.58]
			},
			{
				x: new Date(1528823600000),
				y: [6619, 6625.97, 6595.27, 6598.86]
			},
			{
				x: new Date(1528825400000),
				y: [6598.86, 6598.88, 6570, 6587.16]
			},
			{
				x: new Date(1528827200000),
				y: [6588.86, 6600, 6580, 6593.4]
			},
			{
				x: new Date(1528829000000),
				y: [6593.99, 6598.89, 6585, 6587.81]
			},
			{
				x: new Date(1528830800000),
				y: [6587.81, 6592.73, 6567.14, 6578]
			},
			{
				x: new Date(1528832600000),
				y: [6578.35, 6581.72, 6567.39, 6579]
			},
			{
				x: new Date(1528834400000),
				y: [6579.38, 6580.92, 6566.77, 6575.96]
			},
			{
				x: new Date(1528836200000),
				y: [6575.96, 6589, 6571.77, 6588.92]
			},
			{
				x: new Date(1528838000000),
				y: [6588.92, 6594, 6577.55, 6589.22]
			},
			{
				x: new Date(1528839800000),
				y: [6589.3, 6598.89, 6589.1, 6596.08]
			},
			{
				x: new Date(1528841600000),
				y: [6597.5, 6600, 6588.39, 6596.25]
			},
			{
				x: new Date(1528843400000),
				y: [6598.03, 6600, 6588.73, 6595.97]
			},
			{
				x: new Date(1528845200000),
				y: [6595.97, 6602.01, 6588.17, 6602]
			},
			{
				x: new Date(1528847000000),
				y: [6602, 6607, 6596.51, 6599.95]
			},
			{
				x: new Date(1528848800000),
				y: [6600.63, 6601.21, 6590.39, 6591.02]
			},
			{
				x: new Date(1528850600000),
				y: [6591.02, 6603.08, 6591, 6591]
			},
			{
				x: new Date(1528852400000),
				y: [6591, 6601.32, 6585, 6592]
			},
			{
				x: new Date(1528854200000),
				y: [6593.13, 6596.01, 6590, 6593.34]
			},
			{
				x: new Date(1528856000000),
				y: [6593.34, 6604.76, 6582.63, 6593.86]
			},
			{
				x: new Date(1528857800000),
				y: [6593.86, 6604.28, 6586.57, 6600.01]
			},
			{
				x: new Date(1528859600000),
				y: [6601.81, 6603.21, 6592.78, 6596.25]
			},
			{
				x: new Date(1528861400000),
				y: [6596.25, 6604.2, 6590, 6602.99]
			},
			{
				x: new Date(1528863200000),
				y: [6602.99, 6606, 6584.99, 6587.81]
			},
			{
				x: new Date(1528865000000),
				y: [6587.81, 6595, 6583.27, 6591.96]
			},
			{
				x: new Date(1528866800000),
				y: [6591.97, 6596.07, 6585, 6588.39]
			},
			{
				x: new Date(1528868600000),
				y: [6587.6, 6598.21, 6587.6, 6594.27]
			},
			{
				x: new Date(1528870400000),
				y: [6596.44, 6601, 6590, 6596.55]
			},
			{
				x: new Date(1528872200000),
				y: [6598.91, 6605, 6596.61, 6600.02]
			},
			{
				x: new Date(1528874000000),
				y: [6600.55, 6605, 6589.14, 6593.01]
			},
			{
				x: new Date(1528875800000),
				y: [6593.15, 6605, 6592, 6603.06]
			},
			{
				x: new Date(1528877600000),
				y: [6603.07, 6604.5, 6599.09, 6603.89]
			},
			{
				x: new Date(1528879400000),
				y: [6604.44, 6604.44, 6600, 6603.5]
			},
			{
				x: new Date(1528881200000),
				y: [6603.5, 6603.99, 6597.5, 6603.86]
			},
			{
				x: new Date(1528883000000),
				y: [6603.85, 6605, 6600, 6604.07]
			},
			{
				x: new Date(1528884800000),
				y: [6604.98, 6606, 6604.07, 6606]
			}
		]
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		flex: 2,
		margin: '2rem',
		borderRadius: '.8rem',
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

function WidgetStockChart(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={clsx(classes.root, 'rounded-8 mx-24 mb-24')}>
			<FuseAnimate delay={100}>
				<div className="container relative px-24 pt-20 sm:pt-16 flex flex-row justify-between items-center">
					<Typography className="h1 font-medium" color="textPrimary">
						市場歷史
					</Typography>

					<div className="flex justify-between items-center">
						<div className="flex items-center mr-12">
							{smUp && (
								<Button className="py-8 px-12 rounded-8" size="small" disabled>
									XRP
								</Button>
							)}
							<Button className="py-8 px-12 rounded-8" size="small" disabled>
								ETH
							</Button>
							<Button className="py-8 px-12 rounded-8" size="small">
								BTC
							</Button>
						</div>
						<Settings size={20} className="cursor-pointer mx-0 sm:ml-12 sm:mr-8" />
					</div>
				</div>
			</FuseAnimate>

			<FuseAnimate delay={100}>
				<div className="px-20">
					<Chart
						className="-ml-16 -mr-12 sm:mx-0"
						options={OPTIONS({
							labelColor: '#e7eef7',
							dangerLight: '#f29292',
							strokeColor: '#b9c3cd',
							upward: theme.palette.danger.main,
							downward: theme.palette.green.main,
							primary: '#7367F0'
						})}
						series={SERIES}
						type="candlestick"
						height={260}
					/>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default React.memo(WidgetStockChart);
