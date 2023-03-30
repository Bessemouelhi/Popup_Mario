// let numbersOne = [1, 2, 3];
// let numbersTwo = [4, 5, 6];
// let numbersThree = [7, 8, 9];
// let numbersFour = [10, 11, 12];
// let numbersCombined = [...numbersOne, ...numbersTwo];
// let numbersPushed = [];
//numbersPushed.push(numbersThree, numbersFour);
//document.write(numbersCombined+"\n");
//document.write(numbersPushed+"\n");

// console.log("numbersCombined : " + numbersCombined);
// console.log("numbersPushed : " + numbersPushed);

// console.log(numbersCombined);
// console.log(numbersPushed);

const btnPop = document.getElementsByClassName('POPUPjeu');
const cross = document.getElementById('cross');
const popup = document.querySelector('.popup');

console.log(cross);



function mario(titre, date, platform, description, logo) {
    this.titre = titre;
    this.date = date;
    this.platform = platform;
    this.description = description
    this.logo = logo;
}

let mario1 = new mario("Super mario Bros.", 1985, "NES", "Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.", "mario1.svg");

let mario2 = new mario("Super mario Bros. 2", 1988, "NES", "Super Mario Bros. 2 (ou Super Mario USA au Japon) est un jeu vidéo de plates-formes développé par Nintendo R&D4 et édité par Nintendo. Il sort sur Nintendo Entertainment System en 1988 en Amérique du Nord, en 1989 en Europe puis en 1992 au Japon.", "mario2.jpg");

let mario3 = new mario("Super mario Bros. 3", 1988, "NES", "Super Mario Bros. 3 (スーパーマリオブラザーズ3, Sūpā Mario Burazāzu Surī?) est un jeu vidéo de plates-formes développé et édité par Nintendo sur Nintendo Entertainment System. Il s'agit du troisième volet de la série Super Mario et il est commercialisé en 1988 au Japon, en 1990 aux États-Unis et en 1991 en Europe. Le développement est pris en charge par Nintendo Entertainment Analysis & Development sous la houlette de Shigeru Miyamoto, qui dirige le jeu avec Takashi Tezuka et Hiroshi Yamauchi.", "mario3.svg");

let mario4 = new mario("Super mario Land", 1989, "Game Boy", "");
let mario5 = new mario("Super mario World", 1990, "Super Famicom", "");
let mario6 = new mario("Super mario Land 2", 1992, " Game Boy", "");
let mario7 = new mario("Super mario World 2 Yoshi's Island", 1995, "Super Famicom", "");
let mario8 = new mario("Super mario 64", 1996, "Nintendo 64", "");
let mario9 = new mario("Super mario Sunshine", 2002, "GameCube", "");
let mario10 = new mario("Super mario Galaxy", 2007, "Wii", "");

/*let myCollec = new Map();
myCollec.set(1, mario1);
myCollec.set(2, mario2);
myCollec.set(3, mario3);
myCollec.set(4, mario4);
myCollec.set(5, mario5);
myCollec.set(6, mario6);
myCollec.set(7, mario7);
myCollec.set(8, mario8);
myCollec.set(9, mario9);
myCollec.set(10, mario10);*/

let maCollection = {
    ...{
        mario1
    },
    ...{
        mario2
    },
    ...{
        mario3
    },
    ...{
        mario4
    },
    ...{
        mario5
    },
    ...{
        mario6
    },
    ...{
        mario7
    },
    ...{
        mario8
    },
    ...{
        mario9
    },
    ...{
        mario10
    }
};
console.log(maCollection);

for (const key in maCollection) {
    console.log(maCollection[key]); //syntaxe obligatoire lorsque la clé est dynamique
};

console.log(">>>>>>>>>>>>>>>>");

let myBody = document.querySelector('body');

Object.values(maCollection).map((el, index) => {
    console.log(el.titre);
    let inHtml = "";
    inHtml += "<div class='jeu'><h2>" + el.titre + "</h2>";
    inHtml += "<h3>" + el.platform + "</h3>";
    inHtml += "<h4>" + el.date + "</h4>";
    inHtml += "<button class='POPUPjeu' id='mario" + (index + 1) + "'>OPEN</button></div>";

    myBody.innerHTML += inHtml;
})



///////////////////////////////////////////////////////MODAL///////////////////////////////////////////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let popTitre = document.getElementById('titre');
let popDate = document.getElementById('date');
let popPlatform = document.getElementById('platform');
let popDesc = document.getElementById('description');
let popLogo = document.getElementById('logo');
let btnPrevious = document.getElementById('btnPrevious');
let btnNext = document.getElementById('btnNext');

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

let currentModalIndex = -1;

for (let index = 0; index < btnPop.length; index++) {
    let key = btnPop[index].id;
    console.log(key);
    btnPop[index].addEventListener('click', (e) => {
        displayModal(key);

        currentModalIndex = index;
    })
}

btnNext.addEventListener('click', () => {
    if(currentModalIndex+1 < btnPop.length)
        currentModalIndex++;
    else if(currentModalIndex == btnPop.length-1)
        currentModalIndex = 0;

    let key = btnPop[currentModalIndex].id;
    displayModal(key);
})

btnPrevious.addEventListener('click', () => {
    if(currentModalIndex > 0)
        currentModalIndex--;
    else if(currentModalIndex == 0)
        currentModalIndex = btnPop.length-1;

    let key = btnPop[currentModalIndex].id;
    displayModal(key);
})

function displayModal(key) {
    console.log(maCollection[key].titre);
        modal.style.display = "block";
        popTitre.innerText = maCollection[key].titre;
        popDate.innerText = maCollection[key].date;
        popPlatform.innerText = maCollection[key].platform;
        popDesc.innerText = maCollection[key].description;
        popLogo.src = 'img/'+maCollection[key].logo;
        
        console.log("currentModalIndex : " + currentModalIndex);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}