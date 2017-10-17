import {XmlRpc} from './xmlrpc.js';
import {Storge} from './storage.js';

const STORAGE_VERSION = 1;

/** @record */
export class CollectionGame {
  constructor() {
    /** @const {string} */
    this.name;
    /** @const {number} */
    this.id;
    /** @const {string} */
    this.comment;
    /** @const {!Game|undefined} */
    this.data;
  }

  /**
   * @param {!Element} el
   * @return {!CollectionGame}
   */
  static parse(el) {
    throw 'not implemented';
  }
}

/** @record */
export class Game {
  constructor() {
    /** @const {number} */
    this.id;
    /** @const {string} */
    this.thumbnailUrl;
    /** @const {string} */
    this.imageUrl;

    // Simple non-distribution versions
    /** @const {number} */
    this.minPlayers;
    /** @const {number} */
    this.maxPlayers;
    /** @const {number} */
    this.minAge;
    /** @const {number} */
    this.playTime;
    /** @const {number} */
    this.minPlayTime;
    /** @const {number} */
    this.maxPlayTime;

    // Distribution versions
    /** @const {!Array<boolean>} */
    this.playerCount;
    /** @const {!Array<number>} */
    this.playerBest;
    /** @const {!Array<number>} */
    this.ageDist;
 
    // Additional metadata
    /** @const {!Array<string>} */
    this.category;
    /** @const {!Array<string>} */
    this.mechanic;
    /** @const {!Array<string>} */
    this.family;
    /** @const {!Array<number>} */
    this.expansions;
    /** @const {number|undefined} */
    this.expands;
    /** @const {!Array<string>} */
    this.designer;
    /** @const {number} */
    this.year;
  }

  /**
   * @param {!Document} doc
   * @return {!Game}
   */
  static parse(doc) {
    throw 'not implemented';
  }
}

/** @type {!Storage.Key<!Array<CollectionGame>>} */
const COLLECTION = new Storage.Key('collection');

/** @type {!Storage.Key<!Array<Game>>} */
const GAME = new Storage.Key('game');


export class BoardGameGeek {
  constructor(/** !XmlRpc= */ rpc = new XmlRpc(),
              /** !Storage= */ storage = new Storage(STORAGE_VERSION)) {
    /** @private @const {!XmlRpc} */
    this.rpc_ = rpc;
    /** @private @const {!Storge} */
    this.storage_ = storage;
  }

  /**
   * @param {string} user
   * @return {!Array<!CollectionGame>}
   */
  collection(user) {
    throw 'not implemented';
  }
}
