import React from 'react';
import { HelpCircle } from 'react-feather';
import ReactFC from 'react-fusioncharts';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const chartConfigsBuilder = theme => ({
	type: 'world',
	width: '100%',
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
				// "<div class='text-center text-gray-200 text-14 py-2 px-4'>$lname</div><div class='text-center text-16 text-white text-semibold'>$value 瀏覽</div>"
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

function WidgetCustomerMap(props) {
	const classes = useStyles(props);
	const theme = useTheme(props);

	const CHART_CONFIGS = chartConfigsBuilder(theme);

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="h1 font-medium">我的客戶</Typography>
				<Tooltip
					arrow
					title="我的客戶"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<IconButton aria-label="我的客戶說明" className="h-36 p-8" color="inherit" size="small">
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</IconButton>
				</Tooltip>
			</div>

			<div className="px-20 py-16 sm:pt-8 md:pt-0">
				<ReactFC {...CHART_CONFIGS} />
			</div>
		</Card>
	);
}

export default WidgetCustomerMap;
