// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangular_area = (height, width) => height * width;
console.log(rectangular_area(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle_area = (radius) => Math.PI * radius ** 2;
console.log(circle_area(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder_area = (height, radius) => 2 * Math.PI * radius * (radius + height);
console.log(cylinder_area(5, 10));

const cylinder_volume = (height, radius) => Math.PI * radius ** 2 * height;
console.log(cylinder_volume(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
const array_print = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
};

let my_arr = ["HI", "HOW", "ARE", "YOU", "?"];
array_print(my_arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraph_create = (text) => document.write(`<p>${text}</p>`);

paragraph_create("Hi, how are you?");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const create_list_static = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);

create_list_static("Елемент списку з трьома елементами");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const create_list = (text, count = 1) => {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

create_list("Елемент списку з довільною кількістю елементів", 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const create_primary_list = (arr) => {
    document.write("<ul>");
    for (let element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write("</ul>");
}

let my_arr_2 = [1, "Hi", true, 0.94];
create_primary_list(my_arr_2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const display_object = (arr) => {
    for (let obj of arr) {
        document.write(`<p>ID: ${obj.id},<br>Name: ${obj.name},<br>Age: ${obj.age}.</p>`);
    }
}

let obj_arr = [
    {id: 1, name: "Andriy", age: 30},
    {id: 2, name: "Petro", age: 25},
    {id: 3, name: "Vladik", age: 40}
];

display_object(obj_arr);

// - створити функцію яка повертає найменьше число з масиву
const find_min = (arr) => {
    let min_num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min_num > arr[i]) {
            min_num = arr[i];
        }
    }
    return min_num;
}

console.log(find_min([2, 5, 8, 45, -9, 5, 26, 2.0, 7.4, 154, -5, -4, 0]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let summa = 0;
    for (let num of arr) {
        summa += num;
    }
    return summa;
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const swap = (arr, index1, index2, is_return = false) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    if (is_return) {
        return arr;
    }
}

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapped_arr = swap([11, 22, 33, 44], 0, 1, true);
console.log(swapped_arr);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for(let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
}

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange_result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(exchange_result);
