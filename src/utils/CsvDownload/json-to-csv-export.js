Object.defineProperty(exports, '__esModule', {
	value: true
});

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i += 1) {
			arr2[i] = arr[i];
		}
		return arr2;
	}
	return Array.from(arr);
}

const csvDownload = function csvDownload(data, name) {
	const items = data;
	const filename = name || 'export.csv';

	const header = Array.from(
		new Set(
			items.reduce(function (r, e) {
				return [].concat(_toConsumableArray(r), _toConsumableArray(Object.keys(e)));
			}, [])
		)
	);
	let csv = items.map(function (row) {
		return header
			.map(function (fieldName) {
				return JSON.stringify(row[fieldName] || '');
			})
			.join(',');
	});
	csv.unshift(header.join(','));
	csv = csv.join('\r\n');

	const blob = new Blob([`\uFEFF${csv}`], {
		type: 'text/plain;charset=utf-8'
	});

	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(blob, filename);
		return;
	}
	const link = document.createElement('a');
	const url = URL.createObjectURL(blob);
	link.href = url;
	link.download = filename;
	link.style.display = 'none';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

exports.default = csvDownload;
