import { DepositedToBins as DepositedToBinsEvent } from "../generated/LBPair/LBPair";
import { DepositedToBin } from "../generated/schema";

export function handleDepositedToBins(event: DepositedToBinsEvent): void {
  let entity = new DepositedToBin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.sender = event.params.sender;
  entity.to = event.params.to;
  entity.ids = event.params.ids;
  entity.amounts = event.params.amounts;

  entity.save();
}
