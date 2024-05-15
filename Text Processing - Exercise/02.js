function hashtag(string) {
    const words = string.split(' ');

    for (const word of words) {
        const isValid = word.startsWith('#') && word.length > 1;
        if (isValid) {
            let isLetter = true;
            let copyWord = '';

            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    copyWord += word[i];
                }
            }
            if (isLetter) {
                console.log(copyWord);
            }
        }
    }
}