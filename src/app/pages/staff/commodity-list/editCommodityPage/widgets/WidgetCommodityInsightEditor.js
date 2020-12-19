import React, { useState } from 'react';
import { HelpCircle } from 'react-feather';

import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import BraftEditor from 'braft-editor';
import clsx from 'clsx';

import 'braft-editor/dist/index.css';

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

const WidgetCommodityInsightEditor = props => {
	const classes = useStyles();
	const theme = useTheme(props);
	const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

	const handleEditorChange = async () => {
		const htmlContent = editorState.toHTML();

		console.log('htmlContent, ', htmlContent);
	};

	const submitContent = eState => {
		setEditorState(eState);
	};

	return (
		<Card className={clsx(classes.root, 'w-full rounded-8 shadow-none')}>
			<div className="px-24 pt-20 sm:pt-16 flex justify-between items-center">
				<Typography className="text-20 font-medium">檔案/簡介</Typography>
				<Tooltip
					arrow
					title="成功掛單比率"
					placement="top"
					classes={{ tooltip: 'bg-grey-800 text-white p-8 font-300 text-14' }}
				>
					<IconButton aria-label="成功掛單比率說明" className="h-36 p-8" color="inherit" size="small">
						<HelpCircle size={20} className="cursor-pointer text-muted" />
					</IconButton>
				</Tooltip>
			</div>

			<div className="relative px-16 sm:px-24 pb-16">
				<BraftEditor value={editorState} onChange={handleEditorChange} onSave={submitContent} />
			</div>
		</Card>
	);
};

export default WidgetCommodityInsightEditor;
