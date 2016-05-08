'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var alt = require('../alt'),
    InsultSource = require('../sources/insult-source');

var InsultActions = function () {
    function InsultActions() {
        _classCallCheck(this, InsultActions);
    }

    _createClass(InsultActions, [{
        key: 'updateInsult',
        value: function updateInsult(insult) {
            return insult;
        }
    }, {
        key: 'insultFailed',
        value: function insultFailed(error) {
            return error;
        }
    }, {
        key: 'fetchInsult',
        value: function fetchInsult() {
            var _this = this;

            return function (dispatch) {
                dispatch();

                InsultSource.fetch().then(function (insult) {
                    _this.updateInsult(insult);
                }).catch(function (error) {
                    _this.insultFailed(error);
                });
            };
        }
    }]);

    return InsultActions;
}();

module.exports = alt.createActions(InsultActions);