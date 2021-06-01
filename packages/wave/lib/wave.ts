import { Log, LogLevel, Storage } from "./internal";

export interface WaveConfig {
  logging: LogLevel;
};

export class Wave {
  public ready: boolean = false;
  public storage: Storage;
  public config: WaveConfig = {
    logging: 1
  };

  constructor () {
    Log(() => this, 2, 'Wave is up and running !');
  }
}