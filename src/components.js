riot.tag2('insulter', '<article class=""> <h3>{insult}</h3> </article>', 'insulter,[riot-tag="insulter"],[data-is="insulter"]{ display: block; } insulter h3,[riot-tag="insulter"] h3,[data-is="insulter"] h3{ color: red; text-transform: capitalize; }', '', function(opts) {

        var insults = [
            'fuck you',
            'my balls your mouth',
            'jizzmop',
            'shit head',
            'tardjar'
        ];

        this.insult = insults[Math.round(Math.random() * (insults.length - 1))];
});
