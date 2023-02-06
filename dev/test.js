const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

console.log(bitcoin);
// const previousBlockHash = "OHJJKOSL";
// const currentBlockData = [
//   { amount: 100, sender: "NPST09NM", recipient: "90IOGHK" },
//   { amount: 200, sender: "9NPST09NM", recipient: "90IOGHK" },
//   { amount: 500, sender: "7NPST09NM", recipient: "790IOGHK" },
// ];
// const nonce = 100;
// //console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
// console.log(bitcoin.proofOfWord(previousBlockHash, currentBlockData));
