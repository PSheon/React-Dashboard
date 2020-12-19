import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKGROUND from 'app/assets/images/bot-board/background.jpg';
import Breadcrumbs from 'app/fuse-layouts/shared-components/Breadcrumbs';
import clsx from 'clsx';

import WidgetCommoditySocialInfo from '../widgets/WidgetCommoditySocialInfo';

import WidgetCommodityDangerZone from './widgets/WidgetCommodityDangerZone';
import WidgetCommodityEditHeader from './widgets/WidgetCommodityEditHeader';
import WidgetCommodityInsightEditor from './widgets/WidgetCommodityInsightEditor';

const useStyles = makeStyles(theme => ({
	headerWrapper: {
		cursor: 'pointer',
		background: `url(${BACKGROUND})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	board: {
		cursor: 'pointer',
		boxShadow: theme.shadows[0],
		borderRadius: '.8rem',
		color: theme.palette.getContrastText(theme.palette.primary.dark)
	}
}));

function EditCommodityPage() {
	const { commodityId } = useParams();

	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<Breadcrumbs
					breadCrumbTitle={commodityId}
					breadCrumbs={[
						{ to: '/staff/commodity-list', title: '商品管理' },
						{ title: `編輯 ${commodityId}`, isActive: true }
					]}
				/>
			</FuseAnimate>

			<WidgetCommodityEditHeader />

			<div className="flex flex-col md:flex-row sm:px-8 container">
				<div className="flex flex-1 flex-col min-w-0">
					<div className="widget w-full p-16">
						<WidgetCommodityInsightEditor />
					</div>
				</div>

				<div className="flex flex-col w-full md:w-320 lg:w-400">
					<div className="widget w-full p-16">
						<WidgetCommoditySocialInfo />
					</div>

					<div className="widget w-full p-16">
						<WidgetCommodityDangerZone />
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditCommodityPage;
