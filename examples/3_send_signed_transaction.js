const { ethers } = require("ethers");
const e = require("express");
require("dotenv").config();

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

// sender
const account1 = "0x7890706f001a2DC26eC1495f517edd18e339206b";
// receiver
const account2 = "0x30b01B7241b9FfFa31d398d5614cACf36EEa1a4e";

//private key of account1
const privateKey1 = process.env.PRIVATE_KEY;
//https://docs.ethers.org/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  //show Account 1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  const receiverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `Sender message before : ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `Receiver message before : ${ethers.utils.formatEther(
      receiverBalanceBefore
    )}`
  );
  //show Account 2 balance before transfer
  //sending from account 1 to 2
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.0025"),
  });
  //Wait for transaction to be mined
  await tx.wait();
  console.log(tx);
  //show Account 1 balance after transfer
  const senderBalanceAfter = await provider.getBalance(account1);
  //show Account 2 balance after transfer
  const receiverBalanceAfter = await provider.getBalance(account2);

  console.log(
    `Sender message After : ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `Receiver message After : ${ethers.utils.formatEther(receiverBalanceAfter)}`
  );
};

main();
