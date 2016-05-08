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
        'use strict';

        var InsultStore = require('../stores/insult-store'),

            setState = (state) => {
                this.insult = state.insult;
                this.update();
            };

        this.insult = '';

        this.on('mount', () => {
            InsultStore.listen(setState);
        });

        this.on('unmount', () => InsultStore.unlisten(setState));
    </script>

</insult>
