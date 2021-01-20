import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

function FusePageSimpleHeader(props) {
	const mainThemeDark = useSelector(({ fuse }) => fuse.settings.mainThemeDark);

	return (
		<div className={props.classes.header}>
			{props.header && <ThemeProvider theme={mainThemeDark}>{props.header}</ThemeProvider>}
		</div>
	);
}

export default FusePageSimpleHeader;
