<app>
    <insult></insult>
    <button onclick="{ this.handleClick }">Insult me</button>

    <script>
        var InsultActions = require('../actions/insult-actions');

        InsultActions.fetchInsult();

        this.handleClick = () => InsultActions.fetchInsult();
    </script>
</app>
