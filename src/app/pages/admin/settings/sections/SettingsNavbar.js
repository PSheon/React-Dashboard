import React, { useState } from 'react';
import { HelpCircle, Monitor, ArrowUp, Smartphone, Tablet, ArrowDown, ChevronDown } from 'react-feather';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import WidgetSettingCategoryButton from '../widgets/WidgetSettingCategoryButton';

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

const SettingsNavbar = props => {
	const classes = useStyles(props);
	const theme = useTheme(props);

	return 123;
};

export default SettingsNavbar;
