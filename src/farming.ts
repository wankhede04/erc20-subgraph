import { Deposit as DepositEvent } from "../generated/DexLpFarming/DexLpFarming";
import { Deposit } from "../generated/schema";

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.user = event.params.user;
  entity.tokenId = event.params.tokenId;
  entity.save();
}
