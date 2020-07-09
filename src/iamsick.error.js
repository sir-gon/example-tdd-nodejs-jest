export default class SickException extends Error {
  constructor(...args) {
    super(...args);
  }
}

export { SickException };
