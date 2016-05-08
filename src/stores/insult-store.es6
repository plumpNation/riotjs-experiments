var alt = require('../alt'),
    InsultActions = require('../actions/insult-actions');

class InsultStore {
    constructor() {
        this.insult = null;
        this.error  = null;

        this.bindListeners({
            handleUpdateInsult: InsultActions.UPDATE_INSULT,
            handleFetchInsult : InsultActions.FETCH_INSULT,
            handleInsultFailed: InsultActions.INSULT_FAILED
        });
    }

    handleUpdateInsult(insult) {
        this.insult = insult;
        this.error  = null;
    }

    handleFetchInsult() {
        this.insult = null;
    }

    handleInsultFailed(error) {
        this.error = error;
    }
}

module.exports = alt.createStore(InsultStore, 'InsultStore');
