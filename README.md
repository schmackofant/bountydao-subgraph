# bountydao-subgraph
This is the TheGraph subgraph for the BountyDAO project.

## Setup
Before building & deploying the subgraph, make sure to run the prepare command to generate the subgraph.yaml config file: `yarn prepare:mainnet`. This uses the values from `config/mainnet.json` and you can extend this by adding more config files for other networks and adding the appropriate commands to the `package.json`.

## Usage
Run `yarn codegen` when you have changed the subgraph schema and run `yarn build` to build the subgraph and make it ready to deploy. 

## Deploy
The `yarn deploy` command is set to deploy the subgraph to the hosted TheGraph service at `schmackofant/bounty-dao` currently. You can change this in the `package.json`
