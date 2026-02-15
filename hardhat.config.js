require("hardhat");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true
    }
  },

  networks: {
    hardhat: {
      chainId: 185912,

      // 🔥 High Block Capacity
      blockGasLimit: 1000000000,   // 1 Billion

      gas: "auto",
      gasPrice: 0,

      allowUnlimitedContractSize: true,

      mining: {
        auto: true,
        interval: 0
      },

      initialBaseFeePerGas: 0
    }
  }
};
