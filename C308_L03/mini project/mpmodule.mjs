import moment from 'moment';
export class Voucher {
  constructor(value, expiration) {
    this.value = value;
    this.issue_date = moment();
    this.expiration = expiration;
  }

  valueText() {
    return `The voucher is worth $${this.value}`;
  }

  getIssueDate() {
    return this.issue_date.format('D MMMM YYYY');
  }

  expirationMessage() {
    return `This offer is valid for ${this.expiration} after date of issue.`;
  }

  doubleValue() {
    this.value *= 2;
  }
}
