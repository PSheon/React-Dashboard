import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';

const languages = [
	{
		id: 'tw',
		title: '繁體中文',
		flag: 'tw'
	},
	{
		id: 'en',
		title: 'English',
		flag: 'us'
	},
	{
		id: 'ar',
		title: 'Arabic',
		flag: 'sa'
	}
];

const useStyles = makeStyles(theme => ({
	lngItemWrapper: {
		'&:hover': {
			'& $lngIcon': {
				paddingLeft: 4
			}
		}
	},
	lngIcon: {
		transition: theme.transitions.create('padding', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	}
}));

function LanguageSwitcher(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();

	const theme = useTheme();
	const { i18n } = useTranslation();
	const [menu, setMenu] = useState(null);

	const currentLng = languages.find(lng => lng.id === i18n.language);

	const userMenuClick = event => {
		setMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setMenu(null);
	};

	function handleLanguageChange(lng) {
		const newLangDir = i18n.dir(lng.id);

		/*
        Change Language
         */
		i18n.changeLanguage(lng.id);

		/*
        If necessary, change theme direction
         */
		if (newLangDir !== theme.direction) {
			dispatch(Actions.setDefaultSettings({ direction: newLangDir }));
		}

		userMenuClose();
	}

	return (
		<>
			<Button className="h-48 p-12 rounded-32 -mr-12 sm:mr-0" onClick={userMenuClick}>
				<img
					className="mx-4 min-w-20"
					src={`assets/images/flags/${currentLng.flag}.png`}
					alt={currentLng.title}
				/>

				<Typography className="mx-4 font-600 hidden sm:block">{currentLng.title}</Typography>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{languages.map(lng => (
					<MenuItem
						key={lng.id}
						className={clsx(classes.lngItemWrapper, 'rounded-32')}
						onClick={() => handleLanguageChange(lng)}
					>
						<ListItemIcon className={clsx(classes.lngIcon, 'min-w-40')}>
							<img className="min-w-20" src={`assets/images/flags/${lng.flag}.png`} alt={lng.title} />
						</ListItemIcon>
						<ListItemText primary={lng.title} primaryTypographyProps={{ color: 'textSecondary' }} />
					</MenuItem>
				))}
			</Popover>
		</>
	);
}

export default LanguageSwitcher;
