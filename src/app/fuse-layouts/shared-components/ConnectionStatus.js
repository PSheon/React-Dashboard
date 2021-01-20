import React from 'react';
import { Activity, Clock } from 'react-feather';

import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AvatarBadge from 'app/fuse-layouts/shared-components/AvatarBadge';
import { useSocket } from 'use-socketio';

const ConnectionStatus = () => {
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
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						variant="dot"
						style={{ color: socket.connected ? '#44b700' : '#ea5455' }}
					>
						<Avatar className="w-40 h-40 bg-transparent -m-8 text-gray-100">
							<Activity width={24} height={24} />
						</Avatar>
					</AvatarBadge>
				</IconButton>
			</Tooltip>

			<Tooltip title="時區已同步" placement="top">
				<IconButton className="p-8">
					<AvatarBadge
						overlap="circle"
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						variant="dot"
						style={{ color: '#ea5455' }}
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
