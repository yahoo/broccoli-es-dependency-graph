/*
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/broccoli-es-dependency-graph/blob/master/LICENSE.md
*/
var path       = require('path'),
    depGraph   = require('./lib/index'),
    mergeTrees = require('broccoli-merge-trees');

var source = 'tests/compare/source/';

var simple = depGraph(source, {
    dest: 'simple.json'
});

var full = depGraph(source, {
    includeBindings: true,
    dest: 'full.json'
});

var normalized = depGraph(source, {
    includeBindings: true,
    dest: 'normalized.json',
    moduleName: function (address) {
        // console.log(address);
        // console.log(path.basename(address, '.js'));
        // console.log('--------------');
        return path.basename(address, '.js');
    }
});

module.exports = mergeTrees([simple, full, normalized]);
