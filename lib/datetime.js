/**
 * Datetime
 *
 * Simple date-formatting functions
 */

export default class Datetime {
  constructor(dateStr = new Date()) {
    this.time = new Date(dateStr);
  }

  get toTimestamp() {
   return this.time.getTime();
  }
}
