import React from 'react';
import { ArrowRight } from 'react-feather';
import ReactFC from 'react-fusioncharts';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const chartConfigsBuilder = theme => ({
	type: 'world',
	// width: '100%',
	// height: 400,
	dataFormat: 'json',
	dataSource: {
		chart: {
			bgColor: theme.palette.background.paper,
			showBorder: 0,
			theme: 'candy',
			formatnumberscale: '0',
			numbersuffix: ' 瀏覽',
			entityfillhovercolor: '#5048a8',
			entitytooltext:
				"<div class='text-center text-gray-200 text-14 py-2 px-4'>$displayValue</div><div class='text-center text-16 text-white text-semibold'>$value 瀏覽</div>"
		},
		colorrange: {
			startlabel: '偶爾',
			endlabel: '頻繁',
			code: '#D7DDFF',
			minvalue: '0',
			gradient: '1',
			color: [
				{
					maxvalue: '150',
					displayvalue: '平均',
					code: '#828FD6'
				},
				{
					maxvalue: '300',
					code: '#36469F'
				}
			]
		},
		data: [
			{
				id: 'NA',
				displayvalue: '北美',
				value: '57.2'
			},
			{
				id: 'SA',
				displayvalue: '南美',
				value: '57.1'
			},
			{
				id: 'AS',
				displayvalue: '亞洲',
				value: '247'
			},
			{
				id: 'EU',
				displayvalue: '歐洲',
				value: '188.5'
			},
			{
				id: 'AF',
				displayvalue: '非洲',
				value: '87.2'
			},
			{
				id: 'AU',
				displayvalue: '澳洲',
				value: '8.32'
			}
		]
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		transitionProperty: 'box-shadow, border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	}
}));

const WidgetCustomerMap = () => {
	const theme = useTheme();
	const classes = useStyles();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const CHART_CONFIGS = chartConfigsBuilder(theme);

	return (
		<div
			className={clsx(
				classes.root,
				'w-full px-24 pt-20 sm:pt-16 flex flex-col justify-center items-center bg-bgPaper rounded-8'
			)}
		>
			{/* Title */}
			<div className="w-full flex justify-between items-center text-center">
				<Typography className="h2">訂單紀錄</Typography>

				<div className="flex justify-center items-center">
					{smUp && (
						<Button className="py-8 px-12 rounded-8" size="small">
							更新方案
						</Button>
					)}
					<Button className="py-8 px-12 rounded-8" size="small">
						新加入戶
					</Button>
					<Button className="py-8 px-12 rounded-8" size="small">
						更新方案
					</Button>
					<IconButton
						aria-label="開啟列表"
						className="py-12 ml-12 sm:ml-16 h-36 p-8"
						color="inherit"
						size="small"
					>
						<ArrowRight size={20} className="cursor-pointer" />
					</IconButton>
				</div>
			</div>

			<Divider className="w-full mt-16 mb-4" />

			{/* World Map */}
			<div className="w-full flex flex-col justify-center items-center text-center mb-20">
				<ReactFC {...CHART_CONFIGS} />
			</div>
		</div>
	);
};

export default WidgetCustomerMap;
