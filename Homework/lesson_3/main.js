// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Довільний div</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Довільний div ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 10) {
    document.write('<h1>Довільний заголовок</h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < 10) {
    document.write(`<h1>Довільний заголовок ${i}</h1>`);
    i++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write('</ul>');

// -----------------------------------------------
// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону. Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for (let product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="..." class="product-image">
        </div>
    `);
}


// -----------------------------------------------
// - Є масив
let users = [
    {name: 'vasia', age: 31, status: false},
    {name: 'petia', age: 30, status: true},
    {name: 'mykola', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'maks', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleh', age: 28, status: false},
    {name: 'andriiy', age: 29, status: true},
    {name: 'mariia', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'maks', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
document.write('<p>Користувачів зі статусом true</p>');
for (let user of users) {
    if (user.status === true) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
    }
}
// - користувачів зі статусом false
document.write('<p>Користувачів зі статусом false</p>');
for (let user of users) {
    if (user.status === false) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
    }
}
// - користувачів які старші за 30 років
document.write('<p>Користувачів які старші за 30 років</p>');
for (let user of users) {
    if (user.age > 30) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`);
    }
}
