const genId1 = require('htmk_xid');
const genId2 = require('dpyy_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|4rSvwBTCGK|' + genId2()).digest('base64');
}


module.exports = generateKey;
