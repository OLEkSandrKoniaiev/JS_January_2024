// - створити блок
let my_div = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
my_div.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
my_div.style.backgroundColor = 'Azure';
my_div.style.color = 'Turquoise';
my_div.style.fontSize = '24pt';

my_div.style.height = '200px';
my_div.style.display = 'flex';
my_div.style.justifyContent = 'center';
my_div.style.alignItems = 'center';
my_div.innerText = "My first div";

// - додати цей блок в body.
document.body.appendChild(my_div);

// - клонувати його повністю, та додати клон в body.
let my_div_copy = my_div.cloneNode();

my_div_copy.innerText = "Copy of my first div";

document.body.appendChild(my_div_copy);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let my_arr = ['Main', 'Products', 'About us', 'Contacts'];
let my_ul = document.createElement('ul');

my_ul.style.fontSize = '20pt';

for (let each of my_arr) {
    let my_li = document.createElement('li');
    my_li.innerText = each;
    my_ul.appendChild(my_li);
}
document.body.appendChild(my_ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let my_div_2 = document.createElement('div');

my_div_2.style.backgroundColor = 'Green';
my_div_2.style.color = 'White';
my_div_2.style.display = 'flex';
my_div_2.style.flexWrap = 'wrap';
my_div_2.style.justifyContent = 'space-around';
my_div_2.style.alignItems = 'center';
my_div_2.style.marginBottom = '20px';

for (let each of coursesAndDurationArray) {

    let my_container = document.createElement('div');
    my_container.style.height = '250px';
    my_container.style.width = '250px';
    my_container.style.display = 'flex';
    my_container.style.flexDirection = 'column';
    my_container.style.justifyContent = 'center';
    my_container.style.alignItems = 'center';

    let my_h2 = document.createElement('h2');
    my_h2.innerText = each.title;
    let my_p = document.createElement('p');
    my_p.innerText = "Duration: " + each.monthDuration + " month";
    my_container.append(my_h2, my_p);
    my_div_2.appendChild(my_container);
}
document.body.appendChild(my_div_2);

// =========================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скрипта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let my_div_3 = document.createElement('div');

my_div_3.style.backgroundColor = 'Blue';
// no color
my_div_3.style.display = 'flex';
my_div_3.style.flexWrap = 'wrap';
my_div_3.style.justifyContent = 'space-around';
my_div_3.style.alignItems = 'center';
my_div_3.style.marginBottom = '20px';

for (let each of coursesAndDurationArray) {

    let my_container = document.createElement('div');
    my_container.classList.add('item');

    let my_h1 = document.createElement('h1');
    my_h1.innerText = each.title;
    my_h1.classList.add('heading');

    let my_p = document.createElement('p');
    my_p.innerText = "Duration: " + each.monthDuration + " month";
    my_p.classList.add('description');

    my_container.append(my_h1, my_p);
    my_div_3.appendChild(my_container);
}
document.body.appendChild(my_div_3);

// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [ { name: 'Bart', surname: 'Simpson', age: 10, info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.', photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png' }, { name: 'Homer', surname: 'Simpson', age: 40, info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.', photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png' }, { name: 'Marge', surname: 'Simpson', age: 38, info: 'Марджорі Жаклін "Мардж" Сімпсон (у дівоцтві Був\'є) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї - намисто зі штучних перлів і їздить на помаранчевому універсалі. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття - домогосподарка, більшу частину часу проводить у турботі про дім, дітей і Гомера. Образ Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж - єдиний член сім\'ї, який відвідує церкву добровільно. Намагається підтримувати моральність не тільки своєї сім\'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва - локшина з маслом.', photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png' }, { name: 'Lisa', surname: 'Simpson', age: 9, info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) - героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім\'ї, восьмирічна дівчинка, що вирізняється з-поміж решти Сімпсонів насамперед своїм розумом і розсудливістю.', photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png' }, { name: 'Maggie', surname: 'Simpson', age: 1, info: 'Маргарет Евелін "Меггі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Уперше з\'явилася на телебаченні в шоу Трейсі Ульман, у короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі придумав і розробив карикатурист Метт Грейнінг, поки він чекав зустрічі з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи в шоу Трейсі Ульман, через три роки сім\'я Сімпсонів отримала власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.', photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png' }];

let my_div_4 = document.createElement('div');

my_div_4.classList.add('simpsons-container')

for (let each of simpsons) {

    let my_container = document.createElement('div');
    my_container.classList.add('member');

    let my_h2 = document.createElement('h1');
    my_h2.innerText = each.name + ' ' + each.surname + ' ' + each.age;
    my_h2.classList.add('title');

    let my_img = document.createElement('img');
    my_img.src = each.photo;
    my_img.classList.add('simp_photo')

    let my_p = document.createElement('p');
    my_p.innerText = each.info;
    my_p.classList.add('description');

    my_container.append(my_h2, my_img, my_p);
    my_div_4.append(my_container);
}
document.body.appendChild(my_div_4);

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray = [ { title: 'JavaScript Complex', monthDuration: 5, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'] }, { title: 'Java Complex', monthDuration: 6, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced'] }, { title: 'Python Complex', monthDuration: 6, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced'] }, { title: 'QA Complex', monthDuration: 4, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'] }, { title: 'FullStack', monthDuration: 7, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java'] }, { title: 'Frontend', monthDuration: 4, hourDuration: 909, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'] }];

let my_div_5 = document.createElement('div');

my_div_5.classList.add('main-container')

for (let course of coursesArray) {
    let my_div_1 = document.createElement('div');
    my_div_1.classList.add('container');

    let my_h2 = document.createElement('h2');
    my_h2.classList.add('container-title');
    my_h2.innerText = course.title;

    let my_div_2 = document.createElement('div');
    my_div_2.classList.add('container-description');

    let my_p_1 = document.createElement('p');
    my_p_1.classList.add('description');
    my_p_1.innerText = "Months: " + course.monthDuration;

    let my_p_2 = document.createElement('p');
    my_p_2.classList.add('description');
    my_p_2.innerText = "Hours: " + course.hourDuration;

    my_div_2.append(my_p_1, my_p_2);

    let my_div_3 = document.createElement('div');
    my_div_3.classList.add('container-modules');

    let my_ul = document.createElement('ul');
    my_div_3.appendChild(my_ul);

    for (let module of course.modules) {
        let my_li = document.createElement('li');
        my_li.innerText = module;
        my_ul.appendChild(my_li);
    }

    my_div_1.append(my_h2, my_div_2, my_div_3);
    my_div_5.appendChild(my_div_1);
}
document.body.appendChild(my_div_5);
