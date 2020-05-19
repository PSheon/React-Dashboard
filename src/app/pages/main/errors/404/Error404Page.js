import React from 'react';
import { Link } from 'react-router-dom';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from 'react-feather';

import CssTextField from 'app/fuse-layouts/shared-components/CssTextField';

function Error404Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center py-16 px-24">
			<div className="max-w-512 text-center">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" color="inherit" className="font-medium mb-16">
						404
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={300}>
					<Typography variant="h5" color="textSecondary" className="mb-16">
						很抱歉
					</Typography>
				</FuseAnimate>
				<FuseAnimate delay={500}>
					<Typography variant="h5" color="textSecondary" className="mb-14">
						我們無法找到您要找的頁面
					</Typography>
				</FuseAnimate>

				<Paper className="flex items-center w-full h-56 p-16 mt-48 mb-16" elevation={1}>
					<Icon color="action">search</Icon>
					<Input
						placeholder="Search for anything"
						className="px-16"
						disableUnderline
						fullWidth
						inputProps={{
							'aria-label': 'Search'
						}}
					/>
				</Paper>

				<CssTextField
					className="mb-16"
					autoFocus
					type="email"
					name="email"
					InputProps={{
						placeholder: '想看什麼？',
						startAdornment: (
							<InputAdornment position="start" classes={{ root: 'p-12' }}>
								<Search size={18} />
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
					fullWidth
				/>

				<Link className="font-medium" to="/dashboards">
					返回情報頁
				</Link>
			</div>
		</div>
	);
}

export default Error404Page;
