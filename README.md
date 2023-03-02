# ERC20 Subgraph

## Network
[Polygon Mumbai](https://mumbai.polygonscan.com/)

## Smart contract
- SubgraphToken [0x36F3e6b9eFB8E4874a4B43965eD73E077BCa57c6](https://mumbai.polygonscan.com/address/0x36f3e6b9efb8e4874a4b43965ed73e077bca57c6#code)
- Faucet [0xfce27d23dfa22ec3b321c49ccd820860d45abb1a](https://mumbai.polygonscan.com/address/0xfce27d23dfa22ec3b321c49ccd820860d45abb1a#writeContract)

## Events
1. Approval
2. Transfer

## Subgraph URL
[wankhede/erc20-mummbai](https://thegraph.com/hosted-service/subgraph/wankhede04/erc20-mumbai)

## Subgraph endpoint
[wankhede/erc20-mummbai](https://api.thegraph.com/subgraphs/name/wankhede04/erc20-mumbai)

## Queries

- Approval
```sh
{
  approvals(first: 5) {
    id
    owner
    spender
    value
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

- Transfer
```sh
{
  transfers(first: 5) {
    id
    from
    to
    value
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

## Deploy
### Setup
0. Install dependencies using `yarn`

1. Get access token of the subgraph

2. Generate codegen
`yarn codegen`

3. Build subgraph
`yarn build`

4. Deploy subgraph
`ACCESST=<access_token> yarn deploy`
