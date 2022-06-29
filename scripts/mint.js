const { ethers } = require("hardhat")
const unlockdNFTJSON = require("../artifacts/contracts/UnlockdNFT.sol/UnlockdNFT.json")

async function main() {
  const abi = unlockdNFTJSON.abi
  const provider = new ethers.providers.AlchemyProvider("rinkeby", process.env.PROJECT_ID)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const unlockdNFT = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await unlockdNFT.mint("https://gateway.pinata.cloud/ipfs/QmeMaVRax9cy3GYYK2dwyH3HYg9w4eGjsUz4DSvBQscEBi")
  console.log('NFT minted!')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });