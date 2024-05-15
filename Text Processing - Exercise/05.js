function replaceChars(input) {
    let result = input[0];

    for (let i = 1; i < input.length; i++) {
        const current = input[i];
        const previous = input[i - 1];

        if (current !== previous) {
            result += current;
        }
    }
    console.log(result);
}