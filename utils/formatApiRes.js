const { formatMoney } = require('./formatMoney');
const colors = require('colors');

const formatApiRes = ({res, coinOption, curOption}) => {
	let output = '';
	res.data.forEach(coin => output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatMoney({ curOption, price: coin.price })}\n`);
	return output;
}

module.exports = { formatApiRes };
