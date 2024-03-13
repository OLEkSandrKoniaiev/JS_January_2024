// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone.
// Cтворити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Patron", "Pes", "PesPatron22@gmail.com", "+380665462148"),
    new User(6, "Emilia", "Shurkovych", "emishura@gmail.com", "+380507656456"),
    new User(9, "Mykola", "Kovbasa", "MykaKivbaska@gmail.com", "+380687631442"),
    new User(3, "Sviatik", "Maziarko", "SviatMaziarko@gmail.com", "+380987656442"),
    new User(2, "Anna", "Udud", "UdutAnna@gmail.com", "+380991352674"),
    new User(8, "Vergil", "Sparda", "power.motivation@gmail.com", "+380666566859"),
    new User(4, "Dante", "Sparda", "dmc@gmail.com", "+380666896761"),
    new User(7, "Petro", "Jeva", "PetroJeva@gmail.com", "+380452681534"),
    new User(0, "Oleg", "Sho", "TyShoPlachesh@gmail.com", "+380984621530"),
    new User(5, "Maria", "Trostia", "marichechka@gmail.com", "+380596251202")
];

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let even_users = users.filter(obj => obj.id % 2 === 0);
console.log(even_users);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sorted_even_users = even_users.slice().sort((a, b) => a.id - b.id);
console.log(sorted_even_users);

// - Створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, "Patron", "Pes", "PesPatron22@gmail.com", "+380665462148", ["bananas", "iPhone15", "laptop", "glasses", "backpack", "notebooks"]),
    new Client(6, "Emilia", "Shurkovych", "emishura@gmail.com", "+380507656456", ["headphones", "umbrella", "raincoat", "bananas"]),
    new Client(9, "Mykola", "Kovbasa", "MykaKivbaska@gmail.com", "+380687631442", ["socks", "T-shirt"]),
    new Client(3, "Sviatik", "Maziarko", "SviatMaziarko@gmail.com", "+380987656442", ["camera"]),
    new Client(2, "Anna", "Udud", "UdutAnna@gmail.com", "+380991352674", ["chocolate", "coffee"]),
    new Client(8, "Vergil", "Sparda", "power.motivation@gmail.com", "+380666566859", ["umbrella"]),
    new Client(4, "Dante", "Sparda", "dmc@gmail.com", "+380666896761", ["camera", "tripod"]),
    new Client(7, "Petro", "Jeva", "PetroJeva@gmail.com", "+380452681534", ["sneakers", "tracksuit"]),
    new Client(0, "Oleg", "Sho", "TyShoPlachesh@gmail.com", "+380984621530", ["books", "notebooks", "coffee"]),
    new Client(5, "Maria", "Trostia", "marichechka@gmail.com", "+380596251202", ["flowers", "perfume"])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorted_clients_by_order = clients.slice().sort((a, b) => a.order.length - b.order.length);
console.log(sorted_clients_by_order);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, speed_max, engine_capacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.speed_max = speed_max;
    this.engine_capacity = engine_capacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.speed_max} на годину`);
    };

    this.info = function () {
        for (let prop in this) {
            if (this.hasOwnProperty(prop) === true && typeof this[prop] !== 'function'){
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    };

    this.increase_max_speed = function (speed_new) {
        this.speed_max = speed_new;
    };

    this.change_year = function (new_value) {
        this.year = new_value;
    };
}

Car.prototype.add_driver = function(driver) {
    this.driver = driver;
};

let car1 = new Car("Civic", "Honda", 2020, 200, 1.8);
car1.drive();
car1.increase_max_speed(220);
car1.change_year(2021);
car1.add_driver("Andriy");
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car_cl {
    constructor(model, maker, year, speed_max, engine_capacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.speed_max = speed_max;
        this.engine_capacity = engine_capacity;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.speed_max} на годину`);
    }

    info () {
        for (let prop in this) {
            if (this.hasOwnProperty(prop) === true && typeof this[prop] !== 'function'){
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }

    increase_max_speed (speed_new) {
        this.speed_max = speed_new;
    }

    change_year (new_value) {
        this.year = new_value;
    }
}

Car_cl.prototype.add_driver = function(driver) {
    this.driver = driver;
};

let car2 = new Car_cl("Mustang", "Ford", 2018, 250, 5.0);
car2.drive();
car2.increase_max_speed(280);
car2.change_year(2019);
car2.add_driver("Roman");
car2.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let cinderellas = [
    new Cinderella("Iryna", 16, 37),
    new Cinderella("Olena", 17, 38),
    new Cinderella("Nataliia", 18, 38.5),
    new Cinderella("Viktoriia", 19, 39.5),
    new Cinderella("Yuliia", 20, 41.5),
    new Cinderella("Tetiana", 20, 41),
    new Cinderella("Anastasiia", 23, 40),
    new Cinderella("Mariia", 21, 37),
    new Cinderella("Sofiia", 16, 36.5),
    new Cinderella("Kateryna", 28, 36)
];

class Prince {
    constructor(name, age, slipper_size) {
        this.name = name;
        this.age = age;
        this.slipper_size = slipper_size;
    }
}

let prince = new Prince("Oleg", 21, 38);

for (let girl of cinderellas) {
    if (prince.slipper_size === girl.foot_size) {
        console.log(`Ми знайшли попелюшку! І це ${girl.name}`);
        break;
    }
}

console.log(cinderellas.find(girl => girl.foot_size === prince.slipper_size));
