// Завдання 1
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let variable_0 = "hello";
let variable_1 = "owu";
let variable_2 = "com";
let variable_3 = "ua";
let variable_4 = 1;
let variable_5 = 10;
let variable_6 = -999;
let variable_7 = 123;
let variable_8 = 3.14;
let variable_9 = 2.7;
let variable_10 = 16;
let variable_11 = true;
let variable_12 = false;

console.log(variable_0, variable_1, variable_2, variable_3, variable_4, variable_5, variable_6, variable_7, variable_8, variable_9, variable_10, variable_11, variable_12)


// Завдання 2
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Oleksandr";
let middleName = "Oleksandrovych";
let lastName = "Koniaiev";
let person = firstName + ' ' + middleName + ' ' + lastName;

console.log(person);


// Завдання 3
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a, typeof b, typeof c);


// Додаткове завдання
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let first_name = prompt("Введіть своє ім'я:");
let middle_name = prompt("Тепер по-батькові:");
let last_name = prompt("І прізвище:");
let person_1 = first_name + ' ' + middle_name + ' ' + last_name;

console.log(person_1);
alert(`Вітаю тебе ${first_name}!`);
