// mint-nft.js
require("dotenv").config();
const ethers = require("ethers");

// Get Alchemy API Key
const API_URL = process.env.API_URL;

// Define a JsonRpcProvider for the Sepolia network
const provider = new ethers.providers.JsonRpcProvider(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// console.log(JSON.stringify(contract.abi));

// Create a signer
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = "0xB9CB6c574FC159AD8343C32Da5302981f9F77725";

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenUri =
  "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP";

// Call mintNFT function
const mintNFT = async () => {
  let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
  await nftTxn.wait();
  console.log(
    `NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`
  );
};

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
