const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const contract = fs.readFileSync(lotteryPath, 'utf8');

// console.log(solc.compile(contract, 1));

module.exports = solc.compile(contract, 1).contracts[':Lottery'];