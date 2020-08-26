import BotBoardPageConfig from './bot-board/BotBoardPageConfig';
import ComingSoonPageConfig from './coming-soon/ComingSoonPageConfig';
import DashboardPageConfig from './dashboard/DashboardPageConfig';
import Error404PageConfig from './errors/404/Error404PageConfig';
import Error500PageConfig from './errors/500/Error500PageConfig';
import LandingPageConfig from './landing/LandingPageConfig';
import LeaderBoardPageConfig from './leader-board/LeaderBoardPageConfig';
import MaintenancePageConfig from './maintenance/MaintenancePageConfig';
import MarketPageConfig from './market/MarketPageConfig';
// FIXME testing
// import ContactsAppConfig from './contacts/ContactsAppConfig';
/* Personal */
import MePageConfig from './me/MePageConfig';
import NotifyPageConfig from './notify/NotifyPageConfig';
import PaymentPageConfig from './payment/PaymentPageConfig';
import PricingPageConfig from './pricing/PricingPageConfig';
import ReferralsPageConfig from './referrals/ReferralsPageConfig';

const mainConfigs = [
	LandingPageConfig,
	DashboardPageConfig,
	BotBoardPageConfig,
	MarketPageConfig,
	LeaderBoardPageConfig,
	MePageConfig,
	ReferralsPageConfig,
	PaymentPageConfig,
	PricingPageConfig,
	NotifyPageConfig,
	// ContactsAppConfig,

	ComingSoonPageConfig,
	MaintenancePageConfig,
	Error404PageConfig,
	Error500PageConfig
];

export default mainConfigs;
