import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ConnectionStatus from 'app/fuse-layouts/shared-components/ConnectionStatus';

function FooterLayout1() {
	const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<AppBar
				id="fuse-footer"
				className="relative z-10 shadow-none"
				color="default"
				style={{ backgroundColor: footerTheme.palette.background.default }}
			>
				<Toolbar className="pt-12 px-16 sm:px-24 py-0 flex items-center">
					<div className="flex flex-1">
						<Hidden smDown>
							<Typography color="textSecondary" className="font-medium">
								COPYRIGHT © 2020 PSheon, All rights reserved
							</Typography>
						</Hidden>
						<Hidden mdUp>
							<Typography color="textSecondary" className="font-medium">
								COPYRIGHT © 2020 PSheon
							</Typography>
						</Hidden>
					</div>

					<div className="flex justify-center items-center">
						<ConnectionStatus />
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(FooterLayout1);
