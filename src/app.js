'use strict';

var alt           = require('./alt'),
    InsultActions = require('./actions/insult-actions');

InsultActions.fetchInsult();

document
    .getElementById('insult-button')
    .onclick = () => InsultActions.fetchInsult();

// mount all custom tags on the page
riot.mount('*');
