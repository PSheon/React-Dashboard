import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.background.paper,
		margin: '2rem',
		borderRadius: '.8rem'
	}
}));

function Widget1(props) {
	const mainThemeDark = useSelector(({ fuse }) => fuse.settings.mainThemeDark);

	const classes = useStyles(props);
	const theme = useTheme();
	const [dataset, setDataset] = useState('2017');

	const data = _.merge({}, props.data);

	return (
		<ThemeProvider theme={mainThemeDark}>
			<div className={clsx(classes.root, 'rounded-8 mx-16 sm:mx-24')}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h2" color="textPrimary">
								Visitors
							</Typography>
							<Typography className="h5" color="textSecondary">
								Unique visitors by month
							</Typography>
						</div>
					</FuseAnimate>

					<div className="flex flex-row items-center">
						{Object.keys(data.datasets).map(key => (
							<Button
								key={key}
								className="py-8 px-12"
								size="small"
								onClick={() => setDataset(key)}
								disabled={key === dataset}
							>
								{key}
							</Button>
						))}
					</div>
				</div>
				<div className="container relative h-200 sm:h-256 pb-16">
					<Line
						data={{
							labels: data.labels,
							datasets: data.datasets[dataset].map(obj => ({
								...obj,
								borderColor: theme.palette.primary.main,
								backgroundColor: theme.palette.primary.main,
								pointBackgroundColor: theme.palette.primary.dark,
								pointHoverBackgroundColor: theme.palette.primary.main,
								pointBorderColor: theme.palette.primary.contrastText,
								pointHoverBorderColor: theme.palette.primary.contrastText
							}))
						}}
						options={data.options}
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default React.memo(Widget1);
