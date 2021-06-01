import { Wave } from "../internal";

export function makeQueueName (instance: () => Wave, actionName: string): string {
  return `${instance().config}${actionName}`;
}