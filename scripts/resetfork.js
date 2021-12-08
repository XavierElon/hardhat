const hre = require("hardhat");


async function main () {
    console.log('in main')
    await network.provider.request({
        method: "hardhat_reset",
        params: [
          {
            forking: {
              jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/rLUt9Dwl-nEM6HX1eFqOobYMmT8HOnuA",
              blockNumber: 11095000,
            },
          },
        ],
      });
      console.log('finished main')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
