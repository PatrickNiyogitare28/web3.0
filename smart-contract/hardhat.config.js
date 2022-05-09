// https://eth-ropsten.alchemyapi.io/v2/s4nTgPDhAK25eZqnjOEUNjSqwVPHTkx5a

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
       url: 'https://eth-ropsten.alchemyapi.io/v2/s4nTgPDhAK25eZqnjOEUNjSqwVPHTkx5a',
       accounts: ['2013ee3ab7848e9e423b52ee28284129b1a5c2ea28461e3568e8d563a2673e1e']
    }
  }
}