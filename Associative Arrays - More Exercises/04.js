function bookShelf(data) {
    let tiersList = new Map();
    let booksList = new Map();

    for (const line of data) {
        if (line.includes('->')) {
            let [id, genre] = line.split('->').map(str => str.trim());

            if (![...tiersList.values()].includes(id)) {
                tiersList.set(genre, id);
                booksList.set(genre, []);
            }
        } else {
            let [bookTitle, bookAuthor, genre] = line.split(/[:,]+/).map(str => str.trim());
            if (booksList.has(genre)) {
                booksList.get(genre).push({ bookTitle: bookTitle, bookAuthor, bookAuthor });
            }
        }
    }
    [...booksList.entries()]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach((shelf) => {
            let [genre, books] = shelf;
            books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
            console.log(`${tiersList.get(genre)} ${genre}: ${books.length}`);
            for (const book of books) {
                console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
            }
        });
}