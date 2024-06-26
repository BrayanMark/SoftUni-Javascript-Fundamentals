function cleanCar(commands) {
    let value = 0;

    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'soap') {
            value = soap(value);
        } else if (commands[i] === 'water') {
            value = water(value);
        } else if (commands[i] === 'vacuum cleaner') {
            value = vacuum(value);
        } else {
            value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}