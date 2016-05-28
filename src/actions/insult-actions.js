'use strict';

const UPDATE  = 'insultUpdate',
    REQUESTED = 'insultRequested',
    RECEIVED  = 'insultReceived',

    InsultSource = require('../sources/insult-source'),
    InsultStore  = require('../stores/insult-store'),

    requestInsult = function () {
        return {
            type: REQUESTED
        };
    },

    receiveInsult = function (insult) {
        return {
            type: RECEIVED,
            receivedAt: Date.now()
        };
    },

    fetchInsults = () => {
        return dispatch => {
            InsultStore.dispatch(requestInsult());

            return InsultSource.fetch()
                .then(insult => InsultStore.dispatch(receiveInsult(insult)));
        };
    };

module.exports = {
    fetchInsults,
    UPDATE,
    REQUESTED,
    RECEIEVED
};
