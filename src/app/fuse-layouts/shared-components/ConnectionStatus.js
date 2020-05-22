import React, { useState } from 'react';
import { useSocket } from 'use-socketio';
import { withStyles } from '@material-ui/core/styles';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Activity, Clock } from 'react-feather';

const AvatarBadge = withStyles(theme => ({
	badge: {
		backgroundColor: ({ colorSchema }) => colorSchema,
		color: ({ colorSchema }) => colorSchema,
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

const ConnectionStatus = () => {
	const [connected, setConnected] = useState(false);
	const { socket } = useSocket('connection');

	return (
		<FuseAnimateGroup
			enter={{
				animation: 'transition.expandIn'
			}}
			className="sm:flex items-center"
		>
			<Tooltip title={socket.connected ? 'Socket 已連線' : 'Socket 未連線'} placement="top">
				<IconButton className="p-8">
					<AvatarBadge
						colorSchema={socket.connected ? '#44b700' : '#ea5455'}
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						variant="dot"
					>
						<Avatar className="w-40 h-40 bg-transparent -m-8 text-gray-100">
							<Activity width={24} height={24} />
						</Avatar>
					</AvatarBadge>
				</IconButton>
			</Tooltip>

			<Tooltip title="時間正確" placement="top">
				<IconButton className="p-8">
					<AvatarBadge
						colorSchema="#44b700"
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						variant="dot"
					>
						<Avatar className="w-40 h-40 bg-transparent -m-8 text-gray-100">
							<Clock width={24} height={24} />
						</Avatar>
					</AvatarBadge>
				</IconButton>
			</Tooltip>
		</FuseAnimateGroup>
	);
};

export default ConnectionStatus;
