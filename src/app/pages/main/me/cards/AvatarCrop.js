// TODO add upload component
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Camera } from 'react-feather';
import { FilePond, registerPlugin } from 'react-filepond';

import { DokaOverlay, DokaModal, toURL } from 'utils/doka';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond/dist/filepond.min.css';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// registerPlugin(
// 	FilePondPluginImageExifOrientation,
// 	FilePondPluginImagePreview,
// 	FilePondPluginFileValidateSize,
// 	FilePondPluginFileValidateType,
// 	FilePondPluginImageCrop
// );

const BadgeButton = withStyles(theme => ({
	root: {
		background: theme.palette.background.default,
		color: theme.palette.gray.light,
		boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
		border: `2px solid ${theme.palette.background.paper}`,
		'&:hover': {
			background: fade(theme.palette.background.default, 0.8)
		},
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 2.2s infinite ease-in-out',
			border: '3px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(1.2)',
			opacity: 0
		}
	}
}))(IconButton);

const mask = (root, setInnerHTML) => {
	// https://pqina.nl/doka/docs/patterns/api/doka-instance/#setting-the-crop-mask
	setInnerHTML(
		root,
		`
			<mask id="my-mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white"/>
				<circle cx="50%" cy="50%" r="50%" fill="black"/>
			</mask>
			<rect fill="rgba(255,255,255,.3125)" x="0" y="0" width="100%" height="100%" mask="url(#my-mask)"/>
			<circle cx="50%" cy="50%" r="50%" fill="transparent" stroke-width="1" stroke="#fff"/>
		`
	);
};

const AvatarCrop = () => {
	const ME_DATA = useSelector(({ profile }) => profile.me.data);
	const [profile, setProfile] = useState({
		enabled: false,
		image: 'assets/images/avatar/bull.svg',
		src: 'assets/images/avatar/bull.svg',
		srcPrev: null,
		crop: {
			aspectRatio: 1,
			center: {
				x: 0.5378,
				y: 0.355
			}
		}
	});
	const [avatar, setNewAvatar] = useState([]);

	const handleToggleProfileEditor = () => {
		console.log('Toggle Doka Profile Modal');

		setProfile({
			...profile,
			enabled: !profile.enabled
		});
	};
	const handleDokaConfirmProfile = output => {
		setProfile({
			...profile,
			srcPrev: null,
			enabled: false,
			image: output.file,
			crop: output.data.crop
		});
	};
	const handleDokaCancelProfile = () => {
		console.log('Cancelled Doka Profile Modal');

		setProfile({
			...profile,
			src: profile.srcPrev || profile.src,
			srcPrev: null,
			enabled: false
		});
	};

	return (
		<>
			<Badge
				classes={{ root: 'my-24' }}
				overlap="circle"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				badgeContent={
					<BadgeButton
						key="close"
						aria-label="更新頭像"
						className="p-12 mr-0 sm:mr-4"
						color="inherit"
						size="small"
						onClick={handleToggleProfileEditor}
					>
						<Camera size={18} />
					</BadgeButton>
				}
			>
				<div className="border-8 p-2 rounded-full">
					{ME_DATA.photoURL ? (
						<Avatar
							className="w-96 h-96 bg-secondary text-32 sm:text-48"
							alt="user photo"
							src={ME_DATA.photoURL}
						/>
					) : (
						<Avatar className="w-96 h-96 bg-secondary text-32 sm:text-48">{ME_DATA.displayName[0]}</Avatar>
					)}
				</div>
			</Badge>

			{profile.enabled && (
				<DokaModal
					utils={['crop', 'filter', 'color']}
					src={profile.src}
					cropAspectRatio={1}
					crop={profile.crop}
					cropMask={mask}
					outputData
					onConfirm={handleDokaConfirmProfile}
					onCancel={handleDokaCancelProfile}
				/>
			)}
		</>
	);
};

export default AvatarCrop;
