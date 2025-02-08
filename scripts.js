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
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

//LOCALIZACIONES

const locations = [
    {
        name: "Centro del Pueblo",
        text: "Estas en el centro del pueblo, desde aqui puedes ver la tienda que regenta tu prima."
    },
    {
        name: "Tienda",
        text: "Te encuentras en la tienda. Tu prima te mira desde el mostrador, hay deseo en sus tres ojos. Debes matar al dragón pronto."
    },
    {
        name: "Bosque Oscuro",
        text: "Te encuentras en el bosque. Escuchas mostruos acechando."
    },
    {
        name: "Montaña de la muerte",
        text: "Te encuentras en la \"montaña de la muerte\", sientes escalofrios, quizás sea por el frio, o quizás sea por el dragon de 20 metros del altura que se encuentra ante ti. Relaminedose los labios. Te recuerda a tu prima."
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

//FUNCIONES PARA MOVERSE

function goTown(){

}
function goStore(){
    button1.innerText = "Comprar poción (10 oro)";
    button2.innerText = "Comprar arma (30 oro)";
    button3.innerText = "Salir de la tienda";
    button1.onclick = buyPotion;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "Entras a la tienda";
    console.log("Entras a la tienda");
}
function goForest(){

}
function goMountain(){

}

