// Масиви та об'єкти:
console.log("Масиви та об'єкти:");

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let my_arr = [5, "red", false, null, 98, 'C', "orange", 3, 5.20, true];

for (let i = 0; i < my_arr.length; i++) {
    console.log(my_arr[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_0 = {
    title: "How to become a programmer",
    pageCount: 256,
    genre: "fantasy"
};

let book_1 = {
    title: "I eat my finger",
    pageCount: 87,
    genre: "drama"
};

let book_2 = {
    title: "Two sides of being a bird",
    pageCount: 1067,
    genre: "biography"
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let new_book_0 = {
    title: "How to create AI girlfriend. Step by step solution",
    pageCount: 2364,
    genre: "tech",
    authors: [
        {
            name: "Anton Gunenko",
            age: 47
        }
    ]
};

let new_book_1 = {
    title: "My first love. Learning C for beginners",
    pageCount: 561,
    genre: "romantic",
    authors: [
        {
            name: "Nil Merfchyk",
            age: 31
        },
        {
            name: "Artur Haia",
            age: 26
        }
    ]
};

let new_book_2 = {
    title: "Never gonna give you up",
    pageCount: 65,
    genre: "horror",
    authors: [
        {
            name: "Rick Astley",
            age: 58
        }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: "YaNeAndriy_0",
        username: "user_0",
        password: "Qwer1234.0"
    },
    {
        name: "YaNeAndriy_1",
        username: "user_1",
        password: "Qwer1234.1"
    },
    {
        name: "YaNeAndriy_2",
        username: "user_2",
        password: "Qwer1234.2"
    },
    {
        name: "YaNeAndriy_3",
        username: "user_3",
        password: "Qwer1234.3"
    },
    {
        name: "YaNeAndriy_4",
        username: "user_4",
        password: "Qwer1234.4"
    },
    {
        name: "YaNeAndriy_5",
        username: "user_5",
        password: "Qwer1234.5"
    },
    {
        name: "YaNeAndriy_6",
        username: "user_6",
        password: "Qwer1234.6"
    },
    {
        name: "YaNeAndriy_7",
        username: "user_7",
        password: "Qwer1234.7"
    },
    {
        name: "YaNeAndriy_8",
        username: "user_8",
        password: "Qwer1234.8"
    },
    {
        name: "Oleksandr",
        username: "Les`",
        password: "Qwerty12345"
    }
];

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].username}: ${users[i].password}`);
}

console.log("");


// Логічні розгалуження:
console.log("Логічні розгалуження:");

// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = parseInt(prompt("Введіть будь ласка довільне число:"));
if (x === 0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");
}

let a = [1, 0, -3]
for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
        console.log("Вірно");
    }
    else {
        console.log("Невірно");
    }
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let random_int_number = Math.floor(Math.random() * 60);

if (random_int_number >= 45) {
    console.log("Четверта чверть");
}
else if (random_int_number >= 30) {
    console.log("Третя чверть");
}
else if (random_int_number >= 15) {
    console.log("Друга чверть");
}
else if (random_int_number >= 0) {
    console.log("Перша чверть");
}
else {
    console.log("???");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
random_int_number = Math.floor(Math.random() * 30 + 1);

if (random_int_number > 20) {
    console.log("Третя декада");
}
else if (random_int_number > 10) {
    console.log("Друга декада");
}
else if (random_int_number > 0) {
    console.log("Перша декада");
}
else {
    console.log("???");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day_index = parseInt(prompt("Введіть будь ласка номер для тижня (1-Понеділок):")) % 7;
if (day_index <= 0) {
    day_index = 1;
}

switch (day_index) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Помилка");
}

// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
let number_1 = parseInt(prompt("Введіть число 1:"));
let number_2 = parseInt(prompt("Введіть число 2:"));

if (number_1 > number_2) {
    console.log("Число 1 більше");
}
else if (number_1 === number_2) {
    console.log("Число 1 рівне числу 2");
}
else {
    console.log("Число 2 більше");
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
x = 1;
x = x || "default";
console.log(x);

x = 0;
x = x || "default";
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log("Супер!");
    }
}
