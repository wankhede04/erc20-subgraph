import { DepositBatch as DepositEvent, WithdrawBatch as WithdrawEvent } from "../generated/DexLpFarming/DexLpFarming";
import { Deposit } from "../generated/schema";
import { BigInt, store } from "@graphprotocol/graph-ts";

export function handleDeposit(event: DepositEvent): void {
  const tokenIds: BigInt[] = event.params.tokenId;
  for (let index = 0; index < tokenIds.length; index++) {
    let entity = new Deposit(
      event.params.user.concatI32(event.params.tokenId[index].toI32())
    );

    entity.transactionHash = event.transaction.hash;
    entity.user = event.params.user;
    entity.tokenId = event.params.tokenId[index];
    entity.save();
  }
}

export function handleWithdraw(event: WithdrawEvent): void {
  const tokenIds: BigInt[] = event.params.tokenId;
  for (let index = 0; index < tokenIds.length; index++) {
    store.remove("Deposit", (event.params.user.concatI32(event.params.tokenId[index].toI32())).toHex());
  }
}
