// async things

const fetchingUser = fetch('people.json');
const fetchingColor = fetch('colors.json');

Promise.all([fetchingUser,fetchingColor]).then(valorile =>
    {
        return Promise.all(valorile.map(valorile => valorile.json()))
    }).then(([users, colors]) =>
        {
            console.log(users);
            console.log(colors);
        }).catch(err =>
            {
                console.log(err);
            })