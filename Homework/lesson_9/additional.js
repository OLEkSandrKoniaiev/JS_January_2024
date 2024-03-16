// Сторінка на якій необхідно виконати скрипт: https://mixkit.co/free-stock-music/

let objectArray = [
    // {
    //     title: "",
    //     author: "",
    //     mp3: ""
    // }
]

let titleList = document.querySelectorAll('.item-grid-card__title');
let authorList = document.querySelectorAll('.item-grid-music-preview__author');
let mp3List = document.querySelectorAll('.audio-player__wave>audio');

// console.log(mp3List);
// console.log(titleList);
// console.log(authorList);

for (let i = 0; i < titleList.length; i++) {
    objectArray.push(
        {
            title: titleList[i].outerText,
            author: authorList[i].outerText.replace("by ", ''),
            mp3: mp3List[i].src
        }
    )
}

console.log(objectArray);
