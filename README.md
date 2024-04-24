# A simple hardhat NFT project

install Node run:

```bash
nvm install 18
nvm list
nvm use 18
```

install hardhat run:

```bash
npm install --save-dev hardhat@2.12.2
```

create hardhat project:

```bash
npx hardhat
npx hardhat test
```

install dependency contract:

```bash
npm install @openzeppelin/contracts@4.9.6
```

for using enviroment variable:

```bash
npm install dotenv --save
```

# Deploy the contract

run:

```bash
proxychains4 npx hardhat run scripts/deploy.js --network sepolia
```

contract deployed address is: `0xB9CB6c574FC159AD8343C32Da5302981f9F77725`

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
