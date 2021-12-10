# Scrypto

Scrypto is a CLI tool for checking real-time cryptocurrency conversion rates using the Nomics API.

## Installation
1. Clone repo to machine.
```
$ git clone https://github.com/Alamansky/scrypto.git
```
2. Navigate to project root directory and install node modules
```
$ cd scrypto

$ npm install
```
3. In the root directory, run command `npm link` in the terminal.
```
$ npm link
```
4. Scrypto can now be called with the `scrypto` command; run `scrypto key set` to be prompted for the required Nomics API key.
5. Enter your key (you can obtain one [here](https://p.nomics.com/cryptocurrency-bitcoin-api)).
6. You can now use Scrypto on your local machine.

## API
Commands:

```
$ scrypto key
```

| Sub-Command | Options | Description |
|-------------|---------|-------------|
| set | none | set Nomics API key for CLI
| show | none | print API key to terminal
| remove | none | delete API key

```
$ scrypto check
```

| Sub-Command | Options | Description |
|-------------|---------|-------------|
| price | --coin, --cur | displays cryptocurrency to fiat currency conversion rates for the cryptocurrency specified by the `--coin` option and the fiat currency specified by the `--cur` option (if neither option is specified, default is BTC to USD).

## Example Usage

NOTE: all user inputs must be ISO 4217 codes (e.g. USD, CAD)

To see the current price of Ethereum in Indian Rupees:

```
$ scrypto check price --coin ETH, --cur INR
```

Output:
```
Coin: ETH (Ethereum) | Price: ₹311,636.02
```

The `--coin` option can accept multiple values if the cryptocurrency codes are entered in csv format.

To see the current prices of Ada and Solana in Euros:

```
$ scrypto check price --coin ADA,SOL --cur EUR
```

Output:
```
Coin: SOL (Solana)  | Price: €161.77
Coin: ADA (Cardano) | Price: €1.15 

```