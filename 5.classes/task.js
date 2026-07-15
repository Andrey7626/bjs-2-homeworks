class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    fix() {
        this.state = this._state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find((book) => book[type] === value);
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name === bookName);

        if (bookIndex === -1) {
            return null;
        }

        const [book] = this.books.splice(bookIndex, 1);
        return book;
    }
}

// Тестовый сценарий

const library = new Library('Библиотека имени Ленина');

library.addBook(
    new DetectiveBook(
        'Артур Конан Дойл',
        'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
        2019,
        1008
    )
);

library.addBook(
    new FantasticBook(
        'Аркадий и Борис Стругацкие',
        'Пикник на обочине',
        1972,
        168
    )
);

library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

let book1919 = library.findBookBy('releaseDate', 1919);
if (!book1919) {
    book1919 = new NovelBook('Джек Лондон', 'Маленькая хозяйка большого дома', 1919, 320);
    library.addBook(book1919);
}

console.log(library.findBookBy('name', 'Властелин колец')); // null
console.log(library.findBookBy('releaseDate', 1924).name); // "Мурзилка"

console.log('Количество книг до выдачи: ' + library.books.length);
const givenBook = library.giveBookByName('Машина времени');
console.log('Количество книг после выдачи: ' + library.books.length);

if (givenBook) {
    givenBook.state = 20;
    givenBook.fix();

    console.log('Состояние после восстановления: ' + givenBook.state);

    library.addBook(givenBook);
}