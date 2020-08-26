import React from 'react';
import { useDispatch } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import * as quickPanelActions from './store/actions';

function QuickPanelToggleButton(props) {
	const dispatch = useDispatch();

	return (
		<IconButton className="w-48 h-48 sm:mr-8" onClick={ev => dispatch(quickPanelActions.toggleQuickPanel())}>
			<Badge badgeContent={4} color="secondary">
				<Icon>notifications</Icon>
			</Badge>
		</IconButton>
	);
}

QuickPanelToggleButton.defaultProps = {
	children: <Icon>notifications</Icon>
};

export default QuickPanelToggleButton;
