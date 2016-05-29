<app>
    <insult></insult>
    <button id="insult-adder" onclick="{ this.handleClick }">Insult me</button>

    <script>
        // @flow

        'use strict';

        const InsultStore = require('../stores/insult-store'),
            InsultAction  = require('../actions/insult-actions'),

            fetchInsult = () => {
                InsultStore.dispatch(InsultAction.fetchInsult());
            };

        fetchInsult();

        this.on('mount', () => this['insult-adder'].focus());

        this.handleClick = fetchInsult;
    </script>
</app>
