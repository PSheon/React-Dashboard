import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

const StepperConnector = withStyles({
	alternativeLabel: {
		top: 22
	},
	active: {
		'& $line': {
			backgroundImage: 'linear-gradient(30deg, #7367f0, rgba(115, 103, 240, .5))'
		}
	},
	completed: {
		'& $line': {
			backgroundImage: 'linear-gradient(30deg, #7367f0, rgba(115, 103, 240, .5))'
		}
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1
	}
})(StepConnector);

export default StepperConnector;
