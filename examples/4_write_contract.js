const { ethers } = require("ethers");
const e = require("express");

const INFURA_ID = "9ce5f9f9ea7a4515ad42cf940293a532";
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);
