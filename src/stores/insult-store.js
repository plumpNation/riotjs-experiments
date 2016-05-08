'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var alt = require('../alt'),
    InsultActions = require('../actions/insult-actions');

var InsultStore = function () {
    function InsultStore() {
        _classCallCheck(this, InsultStore);

        this.insult = null;
        this.error = null;

        this.bindListeners({
            handleUpdateInsult: InsultActions.UPDATE_INSULT,
            handleFetchInsult: InsultActions.FETCH_INSULT,
            handleInsultFailed: InsultActions.INSULT_FAILED
        });
    }

    _createClass(InsultStore, [{
        key: 'handleUpdateInsult',
        value: function handleUpdateInsult(insult) {
            this.insult = insult;
            this.error = null;
        }
    }, {
        key: 'handleFetchInsult',
        value: function handleFetchInsult() {
            this.insult = null;
        }
    }, {
        key: 'handleInsultFailed',
        value: function handleInsultFailed(error) {
            this.error = error;
        }
    }]);

    return InsultStore;
}();

module.exports = alt.createStore(InsultStore, 'InsultStore');