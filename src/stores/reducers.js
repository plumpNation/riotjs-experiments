// @flow

'use strict;'

const Redux      = require('redux'),
    InsultAction = require('../actions/insult-actions'),

    insult = (state = {body: null}, action) => {
        switch (action.type) {
            case InsultAction.RECEIVED:
                return {...state, ...action};

            case InsultAction.REQUESTED:
                return {...state, ...action};

            default:
                return state;
        }
    };

module.exports = Redux.combineReducers({
    insult
});
