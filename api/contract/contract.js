const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://holy-white-water.ethereum-goerli.discover.quiknode.pro/90093c7b9e879a5739bcf1adea62ed9b848cf4d2/")
const contractAddress = "0xffffab03f945daad91a19663514a9a5f4ff0bede";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
