'use strict';

var grunt = require('grunt');
var http = require('http');

exports.gorun = {
    gorunBasic: function(test) {
        test.expect(1);
        test.equal(true, true, "Hello world.");
        test.done();
    }   
};