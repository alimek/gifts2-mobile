export default class Project {
  name;

  /**
   * Project constructor
   *
   * @param {string} _name
   * @constructor
   */
  constructor(_name) {
    this.name = _name;
  }

  /**
   * @param {string} _name
   */
  setName(_name) {
    this.name = _name;
  }

  /**
   * @return {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Create project from API response
   *
   * @param {object} responseData
   * @return {Project}
   */
  static fromAPIResponse(responseData) {
    return new Project()
  }
}
