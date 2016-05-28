// @flow

'use strict';

const Redux    = require('redux'),
    insultsApp = require('./reducers');

module.exports = Redux.createStore(insultsApp);
