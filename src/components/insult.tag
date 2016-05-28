<insult>

    <!-- layout -->
    <article if="{ insult }" class="insult-container">
        <h3>{ insult }</h3>
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
                this.insult = state.insult;
                this.update();
            };

        let unsubscriber;

        this.insult = '';

        this.on('mount'  , () => unsubscriber = InsultStore.subscribe(() => setState(InsultStore.getState())));
        this.on('unmount', () => unsubscriber());
    </script>

</insult>
