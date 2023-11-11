import { Voted as VotedEvent, Abstained as AbstainedEvent } from "../generated/Voter/Voter";
import { Voted } from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";

export function handleVote(event: VotedEvent): void {
  let entity = new Voted(event.params.user.concatI32(event.params.pool.toI32()));

  entity.voter = event.params.voter;
  entity.pool = event.params.pool;
  entity.user = event.params.user;
  entity.weight = event.params.weight;
  entity.totalWeight = event.params.totalWeight;
  entity.timestamp = event.params.timestamp;

  entity.save();
}

export function handleReset(event: AbstainedEvent): void {
  store.remove("Voted", (event.params.user.concatI32(event.params.pool.toI32())).toHex());
}
