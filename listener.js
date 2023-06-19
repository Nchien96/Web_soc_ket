const Web3 = require("web3");
require("dotenv").config();

const Web3Provider = new Web3.providers.WebsocketProvider(
  process.env.INFURA_URL
);

const web3 = new Web3(Web3Provider);

web3.eth.subscribe("newBlockHeaders").on("data", async (block) => {
  console.log(`New block received. Block # ${block.number}`);
});
