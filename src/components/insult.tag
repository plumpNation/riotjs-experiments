<insult>

    <!-- layout -->
    <article class="insult-container">
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
        'use strict';

        var InsultStore   = require('../stores/insult-store'),
            InsultActions = require('../actions/insult-actions'),

            update = () => {
                this.insult = InsultStore.getState().insult;
                this.update();
            };

        this.on('mount', () => {
            InsultStore.listen(update);

            InsultActions.fetchInsult();
        });

        this.on('unmount', () => InsultStore.unlisten(update));
    </script>

</insult>
