# Web3.js for Quorum

This is a fork of [ethereum/web3.js](https://github.com/ethereum/web3.js) that will add some of the additional 
functionality provided by [Quorum](https://github.com/jpmorganchase/quorum)

## TODO

1. ~~Add `raft` calls~~
2. Add `quorum` calls

## Installation

`npm install web3quorum`

## Usage

```
var Web3 = require('web3quorum')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))  // Use the ipaddress:port where your node is running

console.log(web3.eth.coinbase)
console.log(web3.raft.role) // if started with the --raft flag and specified in the --rpcapi list

...
```

Note: for raft, start your quorum node with the `--raft` flag, and add `raft` and/or `quorum` to your `--rpcapi` list.

### Requirements

* Node.js
* npm

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
