# Forking Mainnet Ethereum Chain

## Install the Dependencies and Dotenv

```shell
npm install
```

```shell
npm install dotenv
```

## Create .env file

```shell
RPC_URL = ""
PRIVATE_KEY = ""
ETHERSCAN_API= ""

RPC_URL_FORK = ""
PRIVATE_KEY_FORK = ""
ETHERSCAN_API= ""
```
## Forking Ethereum Mainnet with Alchemy

```shell
npx hardhat node --fork https://eth-mainnet.g.alchemy.com/v2/<API_ALCHEMY_KEY>
```

## Compiling the Smart Contracts

```shell
npx hardhat compile
```

## Deploy Smart Contracts on Ethereum Fork

```shell
npx hardhat run --network fork scripts/deploy.js
```
