// @flow

'use strict;'

const Redux      = require('redux'),
    InsultAction = require('../actions/insult-actions'),
    insultRaw   = require('../sources/insult-source'),

    insult = (state = '', action) => {
        switch (action.type) {
            case InsultAction.RECEIVED:
                console.log('updating');

                return action.insult;

            case InsultAction.REQUESTED:
                console.log('fetching');

                return null;

            default:
                return state;
        }
    };

module.exports = Redux.combineReducers({
    insult
});
