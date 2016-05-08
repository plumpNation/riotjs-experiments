riot.tag2('insult', '<article class=""> <h3>{insult}</h3> </article>', 'insult,[riot-tag="insult"],[data-is="insult"]{ display: block; } insult h3,[riot-tag="insult"] h3,[data-is="insult"] h3{ color: red; }', '', function(opts) {
        'use strict';

        var InsultStore = require('../stores/insult-store');

        this.insult = InsultStore.getState().insult;
});
