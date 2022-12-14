
require("@nomiclabs/hardhat-waffle");
require('hardhat-gas-reporter');



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account  of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/cac1807c01c04b07a1188c772d768bdf",
      accounts: ["ba8c4e8a1ae8eead7b82b6b16ad3e04fa19f0bca8944234ab346218949d9175f"],


    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/SyxJwad9MKR6ZqnQTU8NbFTm0xXptqrg",
      accounts: ["ba8c4e8a1ae8eead7b82b6b16ad3e04fa19f0bca8944234ab346218949d9175f"],

    },
    bsc: {
      url: "https://speedy-nodes-nyc.moralis.io/255324e0977365e5d0402f74/bsc/testnet",
      accounts: ["ba8c4e8a1ae8eead7b82b6b16ad3e04fa19f0bca8944234ab346218949d9175f"],

    }
  },
  optimizer: {
    enabled: true,
    runs: 200
  },
  paths: {
    artifacts: './artifacts'
  },
  gasReporter: {
    currency: "EUR",
    gasPrice: 21
  }

};


























































