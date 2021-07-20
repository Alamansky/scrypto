const formatMoney = ({ curOption, price }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: curOption
	});
	return formatter.format(price);
}

module.exports = { formatMoney };