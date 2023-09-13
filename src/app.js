import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((buffer) => new Promise((resolve) => {
        resolve(json(buffer));
      }))
      .then((data) => JSON.parse(data));
  }
}
