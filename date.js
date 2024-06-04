// var moment = require('moment'); // CJS 방식
import moment from 'moment'; // ESM 방식
// import Cat, {Dog} from './oop.js';

const locale = 'ko';
//moment.locale('ko');

moment.locale(locale);

const d = new Date();
console.log('🚀  d:', d);
const m = moment();
console.log('🚀  m:', m)
console.log('🚀  m:', m.format('LLL'));
console.log('🚀  m:', m.format('dddd'));


const writtenDate = moment('2024-04-30');
console.log('🚀  writtenDate:', writtenDate.fromNow());

