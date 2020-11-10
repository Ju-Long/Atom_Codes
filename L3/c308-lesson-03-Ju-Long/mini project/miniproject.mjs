import {Voucher} from './mpmodule.mjs';
import os from 'os';
import moment from 'moment';

const username = os.userInfo().username;
const voucher = new Voucher(100, "two weeks");

console.log(voucher.valueText());
console.log(voucher.expirationMessage());
console.log(voucher.getIssueDate());
console.log(`Issue To: ${username}`);

var issueDate = voucher.issue_dates;
if (moment().diff(issueDate, 'days') == 0 || moment().diff(issueDate, 'days') == 1) {
  voucher.doubleValue();
  console.log(`Congratulations! This voucher value is doubled and is now worth $${voucher.value}`);
}
