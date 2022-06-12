//https://eth-goerli.alchemyapi.io/v2/IVW2VFaNuX2uzTi4b-g9leQLRZjbxEop

require(`@nomiclabs/hardhat-waffle`);

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/IVW2VFaNuX2uzTi4b-g9leQLRZjbxEop',
      accounts: [
        '989a6cd2014a0953981f5acaed5718d7fbfb93ef88156e4811cf8884c4837ff6',
      ],
    },
  },
};