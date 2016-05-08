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
        'Hey, you have something on your chin...3rd one down.'
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
