import React, { useState } from 'react';

import { useTimeout } from '@fuse/hooks';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function FuseLoading(props) {
	const [showLoading, setShowLoading] = useState(!props.delay);

	useTimeout(() => {
		setShowLoading(true);
	}, props.delay);

	if (!showLoading) {
		return null;
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center">
			<Typography className="text-20 mb-16" color="textSecondary">
				載入中
			</Typography>
			<img
				className="loading-spinner"
				src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyLjI4NzU3IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjlmNDMiIHN0cm9rZS13aWR0aD0iMjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjA7MzUiIGtleVRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAgMC4yIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuMiAwIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIzLjI2NDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDE1OSwgNjcsIDAuNzEzODcwOTY3NzQxOTM1NSkiIHN0cm9rZS13aWR0aD0iMjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjA7MzUiIGtleVRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAgMC4yIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"
				alt="載入中"
				width="88"
			/>
		</div>
	);
}

FuseLoading.propTypes = {
	delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

FuseLoading.defaultProps = {
	delay: false
};

export default FuseLoading;
