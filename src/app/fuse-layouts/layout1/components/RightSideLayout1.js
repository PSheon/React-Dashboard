// import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import React from 'react';

import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';

function RightSideLayout1(props) {
	return (
		<>
			{/* <ChatPanel /> */}

			<QuickPanel />
		</>
	);
}

export default React.memo(RightSideLayout1);
