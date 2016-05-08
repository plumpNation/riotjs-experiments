riot.tag2('insult', '<article class="insult-container"> <h3>{insult}</h3> </article>', 'insult,[riot-tag="insult"],[data-is="insult"]{ display: block; } insult h3,[riot-tag="insult"] h3,[data-is="insult"] h3{ color: red; }', '', function(opts) {
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
});
