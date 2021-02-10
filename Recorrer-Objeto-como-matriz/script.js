let usuarios = {
    username0: 'Alfredo',
    username1: 'Raul',
    username2: 'Sebas'
}

Object.keys(usuarios).forEach((value, index) => {
    console.log(index, value, usuarios[value]);
});

Object.entries(usuarios).forEach((value, index) => {
    console.log(index, value, usuarios[value]);
});

Object.values(usuarios).forEach((value, index) => {
    console.log(index, value, usuarios[value]);
});