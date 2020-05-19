import LandingPageConfig from './landing/LandingPageConfig';
import DashboardPageConfig from './dashboard/DashboardPageConfig';
import BotSettingPageConfig from './bot-setting/BotSettingPageConfig';
import MarketPageConfig from './market/MarketPageConfig';
import LeaderBoardPageConfig from './leader-board/LeaderBoardPageConfig';
// FIXME testing
// import ContactsAppConfig from './contacts/ContactsAppConfig';
/* Personal */
import MePageConfig from './me/MePageConfig';
import ReferralsPageConfig from './referrals/ReferralsPageConfig';
import PaymentPageConfig from './payment/PaymentPageConfig';
import NotifyPageConfig from './notify/NotifyPageConfig';

import ComingSoonPageConfig from './coming-soon/ComingSoonPageConfig';
import MaintenancePageConfig from './maintenance/MaintenancePageConfig';
import Error404PageConfig from './errors/404/Error404PageConfig';
import Error500PageConfig from './errors/500/Error500PageConfig';

const mainConfigs = [
	LandingPageConfig,
	DashboardPageConfig,
	BotSettingPageConfig,
	MarketPageConfig,
	LeaderBoardPageConfig,
	MePageConfig,
	ReferralsPageConfig,
	PaymentPageConfig,
	NotifyPageConfig,
	// ContactsAppConfig,

	ComingSoonPageConfig,
	MaintenancePageConfig,
	Error404PageConfig,
	Error500PageConfig
];

export default mainConfigs;
