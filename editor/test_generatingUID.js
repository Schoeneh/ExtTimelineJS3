const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId();

let uidWithTimestamp = uid.stamp(12);
console.log(uidWithTimestamp);
let recoveredTimestamp = uid.parseStamp(uidWithTimestamp);
console.log(recoveredTimestamp);
