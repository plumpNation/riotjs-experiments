var insults = [
        'Fuck you',
        'My balls your mouth',
        'Jizzmop',
        'Shithead',
        'Tardjar',
        'You\'ll never be the man your mother is',
        'You must have been born on a highway, because that\'s where most accidents happen.',
        'You\'re a failed abortion whose birth certificate is an ' + 'apology from the condom factory.',
        'It looks like your face caught on fire and someone tried to put it out with a fork.',
        'Your family tree is a cactus, because everybody on it is a prick.',
        'You\'re so ugly Hello Kitty said goodbye to you.',
        'You are so ugly that when your mama dropped you off at school ' + 'she got a fine for littering.',
        'If you were twice as smart, you\'d still be stupid.',
        'Do you have to leave so soon? I was just about to poison the tea.',
        'You\'re so ugly when you popped out the doctor said aww what ' + 'a treasure and your mom said yeah lets bury it',
        'Yeah, you\'re pretty. Pretty ugly.',
        'Do you know how long it takes for your mother to take a crap? Nine months.',
        'Out of 100,000 sperm, you were the fastest?',
        'I would ask how old you are, but I know you can\'t count that high.',
        'Hey, you have something on your chin...3rd one down.',
        'If you want a good comeback you should go lick your mums face',
        'So, a thought crossed your mind? Must have been a long and lonely journey',
        'How did you get here? Did someone leave your cage open?',
        'If I were a dog and you were a flower I\'d lift up my leg and give you a shower',
        'Better at sex than anyone? Now all you need is a partner',
        'I\'d like to see things from your point of view, too bad, ' +
            'I can\'t shove my head that far arse..',
        'You must have been born on a highway because that\'s where most accidents happen',
        'I\'d slap you, but that would be animal abuse',
        'It\'s scary to think that people like you are allowed to vote',
        'Learn from your parents mistakes, use birth control',
        'The smartest thing that ever came out your mouth was a penis',
        'Don\'t let your mind wander, it\'s far too small to be out by itself',
        'I called your boyfriend gay and he hit me with his purse',
        'Earth is full. Go home.',
        'Why don\'t you go play in traffic?',
        'So you\'ve changed your mind? Does this one work any better?',
        'Nice outfit. Go stand on a street corner, you could make some money',
        'Your legs are like tescos. Open 24/7',
        'You\'d better hide, the garbage collecter is coming',
        'I\'m busy now, can I ignore you another time?'
    ],

    getRandomInsult = function () {
        return insults[Math.round(Math.random() * (insults.length - 1))];
    },

    InsultSource = {
        fetch: function () {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve(getRandomInsult());
                }, 1000);
            })
        }
    };

module.exports = InsultSource;
