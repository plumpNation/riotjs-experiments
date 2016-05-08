<insult>

    <!-- layout -->
    <article class="">
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

        var InsultStore = require('../stores/insult-store');

        this.insult = InsultStore.getState().insult;
    </script>

</insult>
