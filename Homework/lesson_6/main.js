// - Знайти та вивести довижину наступних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let my_strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let str of my_strings) {
    console.log(str.length);
}


// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
for (let str of my_strings) {
    str = str.toUpperCase();
    console.log(str);
}


// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let str of my_strings) {
    str = str.toLowerCase();
    console.log(str);
}


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.substring(str.indexOf(' ') + 1, str.indexOf(' ', 7));
console.log(str);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
let arr = stringToArray(str);
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map перетворити всі об'єкти в масиві на стрінгові.
arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
arr = arr.map(item => String(item));
console.log(arr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (numArray, order = 'ascending') => {
    numArray.sort((a, b) => a - b);
    if (order === 'descending') {
        numArray.reverse();
    }
    return numArray;
}

let nums = [11, 21, 3];
console.log(sortNums(nums));
console.log(sortNums(nums, "descending"));


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(coursesAndDurationArray);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray = coursesAndDurationArray.map(((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
}))
console.log(coursesAndDurationArray);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardDeck = [];
const cardValues = ['6', '7', '8', '9', "10", "jack", "queen", "king", "ace"];
const fillTheDeck = (deck, cardSuit, values, color) => {
    for (let value of values) {
        deck.push({
            cardSuit: cardSuit,
            value: value,
            color: color
        });
    }
}

fillTheDeck(cardDeck, "spade", cardValues, "black"); //піка
fillTheDeck(cardDeck, "diamond", cardValues, "red"); //бубна
fillTheDeck(cardDeck, "clubs", cardValues, "black"); //трефа
fillTheDeck(cardDeck, "heart", cardValues, "red"); //чирва

// console.log(cardDeck);

let spadeAce = cardDeck.find(value => value.cardSuit === "spade" && value.value === "ace");
console.log(spadeAce);

let allSixth = cardDeck.filter(value => value.value === '6');
console.log(allSixth);

let allRed = cardDeck.filter(value => value.color === 'red');
console.log(allRed);

let allDiamond = cardDeck.filter(value => value.cardSuit === 'diamond');
console.log(allDiamond);

let clubsOverNine = cardDeck.filter(value => value.cardSuit === "clubs" && ['9', "10", "jack", "queen", "king", "ace"].includes(value.value));
console.log(clubsOverNine);


// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardDeckBySuits = cardDeck.reduce(
    (accumulator, card) => {
        if (card.cardSuit === "spade") {
            accumulator.spades.push(card);
        } else if (card.cardSuit === "diamond") {
            accumulator.diamonds.push(card);
        } else if (card.cardSuit === "heart") {
            accumulator.hearts.push(card);
        } else if (card.cardSuit === "clubs") {
            accumulator.clubs.push(card);
        }
        return accumulator;
    }, {spades: [], diamonds: [], hearts: [], clubs: []}
);

console.log(cardDeckBySuits);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let allModulesWithSass = coursesArray.filter(
    course => course.modules.includes("sass")
);
console.log(allModulesWithSass);

let allModulesWithDocker = coursesArray.filter(
    course => course.modules.includes("docker")
);
console.log(allModulesWithDocker);
