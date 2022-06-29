require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()


const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      //gasPrice: 20000000000,
      //gas: 8000000
      //gas:"auto"
      //gasLimit: 1000000
    }
  },

  etherscan: {
    apiKey: {
        rinkeby: ETHERSCAN_API
    }
  }
};