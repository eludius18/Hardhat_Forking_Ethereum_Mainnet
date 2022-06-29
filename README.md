# Create Unlockd NFT Collection

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
PUBLIC_KEY = ""
```

## Compiling the Smart Contracts

```shell
npx hardhat compile
```

## Deploy Smart Contracts on Rinkeby Network

```shell
npx hardhat run --network rinkeby scripts/deploy.js
```

## Verify Smart Contracts on Etherscan

```shell
npx hardhat verify --network rinkeby <SMART_CONTRACT_DEPLOYED> "CrelatNFT" "CRT" "ipfs://QmYyzWNRUiDhXhyxDEPsbaQG6FHLWPgfrKnEWzMoVtvDKg/"
```

## Verified Smart Contract

```shell
https://rinkeby.etherscan.io/address/0xa969ED47e97d70569DE10682D3ABc980fa923F76#code
```

