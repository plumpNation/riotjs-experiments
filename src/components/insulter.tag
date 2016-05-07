<insulter>

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
            text-transform: capitalize;
        }
    </style>

    <script>
        // logic comes here
        var insults = [
            'fuck you',
            'my balls your mouth',
            'jizzmop',
            'shit head',
            'tardjar'
        ];

        this.insult = insults[Math.round(Math.random() * (insults.length - 1))];
    </script>

</insulter>
