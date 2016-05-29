<insult>

    <!-- layout -->
    <article class="insult-container">
        <h3 if="{ insult }">{ insult }</h3>
        <p if="{ fetching }">Wait for it...</p>
    </article>

    <style scoped>
        :scope {
            display: block;
        }

        h3 {
            color: red;
        }
    </style>

    <script>
        // @flow

        'use strict';

        const InsultStore = require('../stores/insult-store'),

            setState = (state) => {
                this.insult   = state.insult.body;
                this.fetching = state.insult.fetching;

                this.update();
            };

        let unsubscriber;

        this.insult = '';
        this.fetching = true;

        this.on('mount'  , () => unsubscriber = InsultStore.subscribe(() => setState(InsultStore.getState())));
        this.on('unmount', () => unsubscriber());
    </script>

</insult>
