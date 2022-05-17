// https://eth-ropsten.alchemyapi.io/v2/s4nTgPDhAK25eZqnjOEUNjSqwVPHTkx5a

require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv');
dotenv.config();

const ROPOSTEN_ALCHEMY_API= process.env.ROPOSTEN_ALCHEMY_API;
const ROPOSTEN_ACCOUNT_KEY= process.env.ROPOSTEN_ACCOUNT_KEY;

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
       url: ROPOSTEN_ALCHEMY_API,
       accounts: [ROPOSTEN_ACCOUNT_KEY],
       gas: 2100000,
       gasPrice: 8000000000,
       saveDeployments: true,
    }
  }
}