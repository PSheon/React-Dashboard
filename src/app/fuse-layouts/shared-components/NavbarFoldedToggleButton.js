import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import * as Actions from 'app/store/actions';

import _ from '@lodash';

function NavbarFoldedToggleButton(props) {
	const dispatch = useDispatch();
	const settings = useSelector(({ fuse }) => fuse.settings.current);

	return (
		<IconButton
			className={props.className}
			onClick={() => {
				dispatch(
					Actions.setDefaultSettings(
						_.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
					)
				);
			}}
			color="inherit"
		>
			{settings.layout.config.navbar.folded ? <Icon>brightness_1</Icon> : <Icon>adjust</Icon>}
		</IconButton>
	);
}

NavbarFoldedToggleButton.defaultProps = {
	children: <Icon>adjust</Icon>
};

export default NavbarFoldedToggleButton;
