require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind equip gloom entire tail general'; 
let testAccounts = [
"0x6747c2c1254fb55b1d6973afd8619b49c148027822ac184150b5193c4c4f505a",
"0x969dbc3a840de5b61a1238ddd7da77bbeac5247a8c06f7902baed252cce7db10",
"0x07a3efe0feeb91dde312529957fa52d5acea4912f24e6115891f8269edf3f627",
"0x8585d5f12f3e33d90f96ffacda19cf20c9ec82b788d53ef98bfc4cec3093df10",
"0x0c5e3dc31b29030a04018bd0af8268af26bf3712c01ba86487e2e2cac2375856",
"0x82bc293edb12d27dfcb3c74bd9e1f2c54a225df34bf7eb486599fbd76e5f1026",
"0xd7b6f4457c8b365d637b9c6d9208fe3b9ff3ae162141546662764dcb71a734c3",
"0xcf16cac121ef6e6e039bdabc27c23778108b2ab82abd9cde87734e3b881a71d8",
"0x996b8bfc6ca92465ebd434e8f83807dbda6516b97aff69fe29349c2e42b9a2e6",
"0x8809a11bb597eced6be425076026ab9d59918ec9c6c2d16903ad4492ab73edc7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


