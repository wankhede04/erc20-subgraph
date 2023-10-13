import { Deposit as DepositEvent, Withdraw as WithdrawEvent } from "../generated/DexLpFarming/DexLpFarming";
import { Deposit } from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.params.user.concatI32(event.params.tokenId.toI32())
  );

  entity.user = event.params.user;
  entity.tokenId = event.params.tokenId;
  entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  store.remove("Deposit", (event.params.user.concatI32(event.params.tokenId.toI32())).toHex());
}
