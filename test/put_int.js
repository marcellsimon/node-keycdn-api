var test = require('tape');

var KeyCDN = require('../index');
var keycdn = new KeyCDN(process.env.APIKEY);

var zoneId = 1234;

var zone = {
    name: 'node01',
    expire: 1440
};

test('put', function(t) {
    keycdn.put('zones/' + zoneId + '.json', zone, function(err, res) {
        t.error(err, 'update w/o error');
        t.equal(res.status, 'success', 'update successful');
    });

    t.end();
});
