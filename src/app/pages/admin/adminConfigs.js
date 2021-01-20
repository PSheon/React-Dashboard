import AccessListPageConfig from './access-list/AccessListPageConfig';
import DashboardPageConfig from './dashboard/DashboardPageConfig';
import MaintenancePageConfig from './maintenance/MaintenancePageConfig';
import SettingsPageConfig from './settings/SettingsPageConfig';
import StaffListPageConfig from './staff-list/StaffListPageConfig';

const adminConfigs = [
	// Dashboard
	DashboardPageConfig,
	SettingsPageConfig,
	StaffListPageConfig,
	MaintenancePageConfig,
	AccessListPageConfig
];

export default adminConfigs;
