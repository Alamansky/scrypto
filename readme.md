# Scrypto

Scrypto is a CLI tool for checking real-time cryptocurrency conversion rates using the Nomics API.

## Installation
1. Clone repo to machine
```
$ git clone https://github.com/Alamansky/scrypto.git
```
2. In the root directory, run `npm link` in the terminal.
```
$ npm link
```
3. Scrypto can now be called with the `scrypto` command; run `scrypto key set` to be prompted for the required Nomics API key.
4. Enter your key (you can obtain one [here](https://p.nomics.com/cryptocurrency-bitcoin-api)).
5. You can now use Scrypto on your local machine.

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
```
// NOTE: all user inputs must be ISO 4217 codes (e.g. USD, CAD)

// see the current price of Ethereum in Indian Rupees

$ scrypto check price --coin ETH, --cur INR

// output:
// Coin: ETH (Ethereum) | Price: ₹311,636.02

---

// see the current price of Ada and Solana in Euros
// (multiple cryptos must be formatted as csv)

$ scrypto check price --coin ADA,SOL --cur EUR

// output:
// Coin: SOL (Solana) | Price: €161.77
// Coin: ADA (Cardano) | Price: €1.15 

```