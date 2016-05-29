// @flow

'use strict';

const Redux    = require('redux'),
    ReduxThunk = require('redux-thunk').default,
    insultsApp = require('./reducers');

module.exports = Redux.createStore(
    insultsApp,
    Redux.applyMiddleware(ReduxThunk)
);
