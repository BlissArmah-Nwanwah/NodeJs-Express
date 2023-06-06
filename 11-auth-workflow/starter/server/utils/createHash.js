const crypto = require('crypto');


const hashString = (strings) => crypto.createHash('md5').update(strings).digest('hex');


module.exports = hashString