<app>
    <insult></insult>
    <button id="insult-adder" onclick="{ this.handleClick }">Insult me</button>

    <script>
        var InsultActions = require('../actions/insult-actions');

        InsultActions.fetchInsult();

        this.on('mount', () => this['insult-adder'].focus());

        this.handleClick = () => InsultActions.fetchInsult();
    </script>
</app>
