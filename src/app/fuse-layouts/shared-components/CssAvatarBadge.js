import React from 'react';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const CssAvatarBadge = withStyles(theme => ({
	badge: {
		backgroundColor: ({ statusColorSchema }) => theme.palette[statusColorSchema].main,
		color: ({ statusColorSchema }) => theme.palette[statusColorSchema].main,
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}))(Badge);

CssAvatarBadge.propTypes = {
	statusColorSchema: PropTypes.oneOf(['warning', 'danger', 'success'])
};

CssAvatarBadge.defaultProps = {
	statusColorSchema: 'success'
};

export default CssAvatarBadge;
