'use strict';

var grunt = require('grunt');
var http = require('http');

exports.gostop = {
    gostopBasic: function(test) {
        test.expect(1);

        var options = {
            host: 'localhost',
            port: 3001,
            path: '/foo'
        };

        http.get(options, function(res) {
            test.equal(false, true, 'Server should have been stopped - should not be able to curl it');
            test.done();
        }).on('error', function(e) {
            test.equal(true, true, 'Server successfully killed');
            test.done();
        });
    }   
};