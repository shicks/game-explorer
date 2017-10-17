/** Injectable versioned localStorage wrapper. */
export class Storage {
  constructor(/** number */ version, /** !Storage= */ storage = localStorage) {
    /** @private @const {number} */
    this.version_ = version;
    /** @private @const {!Storage} */
    this.storage_ = storage;
    this.deleteOldData();
  }

  /**
   * @param {!Storage.Key<T>} key
   * @return {T|undefined}
   * @template T
   */
  get(key) {
    const value = this.storage_.getItem(`${this.version_}:${key}`);
    return value != null ? key.parse_(value) : undefined;
  }

  /**
   * @param {!Storage.Key<T>} key
   * @param {T} value
   * @template T
   */
  set(key, value) {
    this.storage_.setItem(`${this.version_}:${key}`, key.stringify(value));
  }

  /** Go through the storage and find all the old versioned data. */
  deleteOldData() {
    const old = [];
    const len = this.storage_.length;
    for (let i = 0; i < len; i++) {
      const key = this.storage_.key(i);
      if (!key.startsWith(this.version + ':')) {
        old.push(key);
      }
    }
    for (const key of old) {
      this.storage_.removeItem(key);
    }
  }
}

/** @template T */
Storage.Key = class {
  /**
   * @param {string} id
   * @param {(function(string): T)=} parse
   * @param {(function(T): string)=} stringify
   */
  constructor(id, parse = JSON.parse, stringify = JSON.stringify) {
    /** @private @const {string} */
    this.id_ = id;
    /** @private @const {function(string): T} */
    this.parse_ = parse;
    /** @private @const {function(T): string} */
    this.stringify_ = stringify;
  }

  /**
   * @param {string} arg
   * @return {!Storage.Key<T>}
   */
  subKey(arg) {
    return new Storage.Key(`${this.id}:${arg}`, this.parse_, this.stringofy_);
  }
}
