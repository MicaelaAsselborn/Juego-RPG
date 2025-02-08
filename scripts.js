//VALORES

let xp = 0;
let health = 100;
let gold= 50;
let currentWeaponIndex = 0;
let potions = 0;
let fighting;
let monsterHealth;
let inventory = ["Palo", "Daga", "Lanza", "Espada"];

//CONSTANTES


const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const goldText = document.querySelector("#gold-text");
const weaponsText = document.querySelector("#weapon-text");
const potionsText = document.querySelector("#potions-text");
const monsterHealthText = document.querySelector("#monster-health-text");
const text = document.querySelector("#text");
const image = document.querySelector("img")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//ESCENARIOS

const locations = [
    {
        name: "Pueblo",
        "button text": ["Ir a la tienda", "Ir al bosque", "Ir a la montaña"],
        "button functions": [goStore, goForest, goMountain],
        text: "Estas en el centro del pueblo, desde aqui puedes ver la tienda que regenta tu prima.",
        image: "img/town.jpg"
    },
    {
        name: "Tienda",
        "button text": ["Comprar poción (10 oro)", "Comprar arma (30 oro)", "Salir de la tienda"],
        "button functions": [buyPotion, buyWeapon, goTown],
        text: "Te encuentras en la tienda. Tu prima te mira desde el mostrador, hay deseo en cada uno de sus tres ojos. Debes matar al dragón pronto.",
        image: "img/shop.jpg"
    },
    {
        name: "Bosque Oscuro",
        "button text": ["Atacar slime", "Atacar bestia", "Volver al pueblo"],
        "button functions": [attackSlime, attackBeast, goTown],
        text: "Te encuentras en el bosque. Escuchas mostruos acechando cerca tuyo. Suenan como los ronquidos de tu madre.",
        image: "img/forest.jpg"
    },
    {
        name: "Dragón",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attack, dodge, goTown],
        text: "Te encuentras en la \"montaña de la muerte\", sientes escalofrios, quizás sea por el frio, o quizás sea por el dragon de 20 metros del altura que se encuentra ante ti, relaminedose sus labios escamosos. Te recuerda a tu prima.",
        image: "img/dragon.jpg"
    },
    {
        name: "Slime",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attack, dodge, goTown],
        text: "Estas atacando un slime. Es tan viscoso...",
        image: "img/slime.jpg"
    },
    {
        name: "Beast",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attack, dodge, goTown],
        text: "Estas atacando una bestia. Sus colmillos enormes te recuerda a tu tio.",
        image: "img/beast.jpg"
    }
]

// ACCIÓN BOTONES

button1.onclick = goStore;
button2.onclick = goForest;
button3.onclick = goMountain;

// FUNCIONES ACCIONES

function buyPotion(){

}
function buyWeapon(){

}
function attack(){

}
function dodge(){

}

//FUNCIONES QUE CAMBIAN EL ESCENARIO

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
    image.src = location.image;
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goForest(){
    update(locations[2]);
}
function goMountain(){
    update(locations[3]);
}
function attackSlime(){
    update(locations[4]);
}
function attackBeast(){
    update(locations[5]);
}