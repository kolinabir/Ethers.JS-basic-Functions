const { ethers } = require("ethers");

// Connect our Infura Node
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/9ce5f9f9ea7a4515ad42cf940293a532`
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
