// @flow

'use strict';

const UPDATE  = 'insultUpdate',
    REQUESTED = 'insultRequested',
    RECEIVED  = 'insultReceived',

    InsultService = require('../lib/insult-service'),

    requestInsult = function () {
        return {
            type: REQUESTED,
            body: null,
            receivedAt: null,
            fetching: true
        };
    },

    receiveInsult = function (insult) {
        return {
            type: RECEIVED,
            body: insult,
            receivedAt: Date.now(),
            fetching: false
        };
    },

    fetchInsult = () => {
        return (dispatch) => {
            dispatch(requestInsult());

            return InsultService.fetch()
                .then(insult => dispatch(receiveInsult(insult)));
        };
    };

module.exports = {
    fetchInsult,
    UPDATE,
    REQUESTED,
    RECEIVED
};
