export default class Settings {
  constructor() {
    this.theme = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];

    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.customSettings = new Map();
    this.generalSettings = new Map();
  }

  setСustomSettings(key, settings) {
    if (this.defaultSettings.get(key) === settings) {
      this.customSettings.delete(key);
      return;
    }
    this.customSettings.set(key, settings);
  }

  getSettings() {
    if (this.customSettings.size === 0) {
      this.generalSettings = this.defaultSettings;
    }
    this.generalSettings = this.defaultSettings;
    this.customSettings.forEach((settings, key) => this.generalSettings.set(key, settings));
    return this.generalSettings;
  }
}
