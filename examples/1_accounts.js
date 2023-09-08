const { ethers } = require("ethers");

// Connect our Infura Node
const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const address = "0x388C818CA8B9251b393131C08a736A67ccB19297";
const main = async () => {
  // Pass Address
  const balance = await provider.getBalance(address);
  console.log(
    `ETH balance of : ${"0x388C818CA8B9251b393131C08a736A67ccB19297"} --> ${ethers.utils.formatEther(
      balance
    )} ETH`
  );
};

main();
