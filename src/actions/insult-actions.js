var alt = require('../alt'),
    InsultSource = require('../sources/insult-source');

class InsultActions {
    updateInsult(insult) {
        return insult;
    }

    insultFailed(error) {
        return error;
    }

    fetchInsult() {
        return (dispatch) => {
            dispatch();

            InsultSource.fetch()
                .then((insult) => {
                    this.updateInsult(insult);
                })
                .catch((error) => {
                    this.insultFailed(error);
                });
        };
    }
}

module.exports = alt.createActions(InsultActions);
