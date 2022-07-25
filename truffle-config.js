const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic="";
const accountIndex = 0;

require('dotenv').config();

const provider = new HDWalletProvider({ 
  privateKeys:[process.env.PK]
  ,providerOrUrl:'https://rpc.c4ei.net'}
  )

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    c4ei: {
      port: 21004,
      provider: provider,
      network_id: "21004",
      host: "http://192.168.1.186"
    }
    // ,c4ei: {
    //   provider: function(){
    //     return new HDWalletProvider(process.env.MNEMONIC, "http://192.168.1.186:21004", accountIndex);
    //   },
    //   network_id: "21004",
    // }
  },
  compilers: {
    solc:{
      version: "0.6.6"
    }
  }
};
