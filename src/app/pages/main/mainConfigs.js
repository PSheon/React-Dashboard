import BotBoardPageConfig from './bot-board/BotBoardPageConfig';
import ComingSoonPageConfig from './coming-soon/ComingSoonPageConfig';
import CryptoMarketPageConfig from './crypto-market/CryptoMarketPageConfig';
import DashboardPageConfig from './dashboard/DashboardPageConfig';
import Error404PageConfig from './errors/404/Error404PageConfig';
import Error500PageConfig from './errors/500/Error500PageConfig';
import LandingPageConfig from './landing/LandingPageConfig';
import LeaderBoardPageConfig from './leader-board/LeaderBoardPageConfig';
import MaintenancePageConfig from './maintenance/MaintenancePageConfig';
import MePageConfig from './me/MePageConfig';
// FIXME testing
// import ContactsAppConfig from './contacts/ContactsAppConfig';
/* Personal */
import NotifyPageConfig from './notify/NotifyPageConfig';
import PaymentPageConfig from './payment/PaymentPageConfig';
import PricingPageConfig from './pricing/PricingPageConfig';
import ReferralsPageConfig from './referrals/ReferralsPageConfig';
import StrategiesMarketPageConfig from './strategies-market/StrategiesMarketPageConfig';

const mainConfigs = [
	LandingPageConfig,
	DashboardPageConfig,
	BotBoardPageConfig,
	CryptoMarketPageConfig,
	StrategiesMarketPageConfig,
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
