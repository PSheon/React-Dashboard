const settingsConfig = {
	layout: {
		/*  layout-1 layout-2 layout-3 */
		style: 'layout1',
		config: {
			footer: {
				style: 'static'
			}
		} // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
	},
	customScrollbars: true,
	animations: true,
	direction: 'ltr', // rtl, ltr
	theme: {
		main: 'defaultDark',
		navbar: 'defaultDark',
		toolbar: 'defaultDark',
		footer: 'defaultDark'
	}
};

export default settingsConfig;
