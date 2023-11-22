class AppConfig {
  constructor() {
    if (typeof AppConfig.instance === "object") {
      return AppConfig.instance;
    }

    this.config = {};

    AppConfig.instance = this;
    return this;
  }

  setConfig(key, value) {
    this.config[key] = value;
  }

  getConfig(key) {
    return this.config[key];
  }

  static getInstance() {
    if (!this._instance) {
      this._instance = new AppConfig();
    }
    return this._instance;
  }
}
