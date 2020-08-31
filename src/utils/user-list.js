export const getInfoFromProgress = (progress = 0.3) => {
	const INFO = {
		percentage: 0,
		colorSchema: 'info'
	};
	if (Number.isNaN(progress)) {
		return INFO;
	}

	const percentage = progress * 100;
	INFO.percentage = percentage;
	if (percentage >= 0 && percentage < 30) {
		INFO.colorSchema = 'danger';
	} else if (percentage >= 30 && percentage < 70) {
		INFO.colorSchema = 'warning';
	} else if (percentage >= 70 && percentage < 95) {
		INFO.colorSchema = 'info';
	} else if (percentage >= 95 && percentage < 101) {
		INFO.colorSchema = 'success';
	} else {
		INFO.colorSchema = 'success';
	}

	return INFO;
};

export const getInfoFromClassGroup = classGroup => {
	const INFO = {
		classTitle: 'VIP 0'
	};
	switch (classGroup) {
		case 'vip0':
			INFO.classTitle = 'VIP 0';
			break;
		case 'vip1':
			INFO.classTitle = 'VIP 1';
			break;
		case 'vip2':
			INFO.classTitle = 'VIP 2';
			break;
		default:
			INFO.classTitle = 'VIP 0';
			break;
	}

	return INFO;
};

export const getInfoFromScheme = schemeGroup => {
	const INFO = {
		schemeTitle: '新加入'
	};
	switch (schemeGroup) {
		case 'new':
			INFO.schemeTitle = '新加入';
			break;
		case 'renew':
			INFO.schemeTitle = '續約';
			break;
		default:
			INFO.schemeTitle = '新加入';
			break;
	}

	return INFO;
};
