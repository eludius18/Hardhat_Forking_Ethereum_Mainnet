const { ethers } = require("hardhat")

async function main() {
  const CrelatNFT = await ethers.getContractFactory("CrelatNFT")
  const crelatNFT = await CrelatNFT.deploy("CrelatNFT", "CRT", "ipfs://QmYyzWNRUiDhXhyxDEPsbaQG6FHLWPgfrKnEWzMoVtvDKg/", "ipfs://QmYyzWNRUiDhXhyxDEPsbaQG6FHLWPgfrKnEWzMoVtvDKg/")

  await crelatNFT.deployed()
  console.log(`Contract successfully deployed to ${CrelatNFT.address}`)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });