import { Wave } from "./internal";

export enum LogLevel {
  NONE = 0,
  BASE = 1,
  VERBOSE = 2,
  DEBUG = 3
}

export function Log (instance: () => Wave, level: LogLevel, ...args: any) {
  const config = instance().config;
  if (level > config.logging) {
    console.log(`[Wave/${LogLevel[level]}]`, ...args);
  }
}