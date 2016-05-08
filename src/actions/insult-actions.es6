var alt = require('../alt');

class InsultActions {
    updateInsults(insults) {
        return insults;
    }
}

module.exports = alt.createActions(InsultActions);
