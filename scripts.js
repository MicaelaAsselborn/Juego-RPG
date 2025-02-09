//VARIABLES

let xp = 0;
let health = 100;
let gold= 150;
let currentWeaponIndex = 0;
let potions = 0;
let fighting = 0;
let monsterHealth = 0;
let inventory = ["Palo"];

//QUERY SELECTORS


const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const goldText = document.querySelector("#gold-text");
const weaponsText = document.querySelector("#weapon-text");
const potionsText = document.querySelector("#potions-text");
const text = document.querySelector("#text");
const image = document.querySelector("img");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const buttonPotion = document.querySelector("#potion");
const monsterStats = document.querySelector("#monster-stats");
const monsterName = document.querySelector("#monster-name");
const monsterHealthText = document.querySelector("#monster-health-text")

//ARMAS

const weapons = [
    {
        name: "Palo",
        power: 5,
    },
    {
        name: " Daga",
        power: 30,
    },
    {
        name: " Lanza",
        power: 50,
    },
    {
        name: " Espada",
        power: 100,
    }
]

//ESCENARIOS

var locations = [
    {
        name: "Pueblo",
        "button text": ["Ir a la tienda", "Ir al bosque", "Ir a la montaña"],
        "button functions": [goStore, goForest, fightDragon],
        text: "Estas en el centro del pueblo, desde aqui puedes ver la tienda que regenta tu prima, la salida al bosque, y a los lejos la montaña.",
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
        "button text": ["Atacar goblin", "Atacar bestia", "Volver al pueblo"],
        "button functions": [fightGoblin, fightBeast, goTown],
        text: "Te encuentras en el bosque. Escuchas mostruos acechando cerca tuyo. Suenan como los ronquidos de tu madre.",
        image: "img/forest.jpg"
    },
    {
        name: "Attack Dragón",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackDragon, dodge, goTown],
        text: "Te encuentras en la \"montaña de la muerte\", sientes escalofrios, quizás sea por el frio, o quizás sea por el dragon de 20 metros del altura que se encuentra ante ti, relaminedose sus labios escamosos. Te recuerda a tu prima.",
        image: "img/dragon.jpg"
    },
    {
        name: "Attack Goblin",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackGoblin, dodge, goForest],
        text: "Estas atacando un goblin. Es pequeño, feo y escurridizo. Te recuerda a tu hermano.",
        image: "img/goblin.jpg"
    },
    {
        name: "Attack Beast",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackBeast, dodge, goForest],
        text: "Estas atacando una bestia. Sus colmillos enormes te recuerdan a tu tio.",
        image: "img/beast.jpg"
    }
]

//MONSTRUOS

const monsters = [
    {
        name: "Goblin",
        level: 5,
        health: 50,
    },
    {
        name: "Bestia",
        level: 30,
        health: 150,
    },
    {
        name: "Dragón",
        level: 100,
        health: 500,
    }
]

// ACCIÓN INICIAL DE LOS BOTONES

button1.onclick = goStore;
button2.onclick = goForest;
button3.onclick = fightDragon;
buttonPotion.onclick = usePotion;


// FUNCIONES ACCIONES

function buyPotion(){
    if(gold >= 10){
        potions += 1;
        gold -= 10;
        goldText.innerText = gold;
        potionsText.innerText = potions;
        text.innerText = "Has comprado una poción. Es tan roja como los ojos de tu abuelo.";
    } else{
    text.innerText = "No tienes suficiente oro."
    }
}
function buyWeapon(){
    if(currentWeaponIndex < weapons.length -1){
        if(gold >= 30){
            gold -= 30;
            currentWeaponIndex ++;
            let newWeapon = weapons[currentWeaponIndex].name;
            inventory.push(newWeapon)
            goldText.innerText = gold;
            weaponsText.innerText = inventory;
            text.innerText = "Has comprado una nueva arma. Ahora tienes una " + newWeapon + ".";
            } else{
        text.innerText = "No tienes suficiente oro."
        } 
    } else {
        text.innerText = "¡Ya tienes el arma más poderosa!";
        button2.innerText = "Vender arma (15 oro)";
        button2.onclick = sellWeapon
    }
}
function sellWeapon(){
    if (inventory.length > 1) {
        gold += 15;
        inventory.shift();
        text.innerText = "Vendiste tu vieja arma por 15 piezas de oro.";
        goldText.innerText = gold;
        weaponsText.innerText = inventory
    } else {
        text.innerText = "¡No deberias vender tu última arma!";
    }
}
function usePotion(){
    if (potions >= 1){
        potions--;
        health += 10;
        potionsText.innerText = potions;
        healthText.innerText = health;
    } else {
        innerText = "No tienes más pociones."
    }
}
function attackGoblin(){
    fighting = 0;
    attack();
}
function attackBeast(){
    fighting = 1;
    attack();
}
function attackDragon(){
    fighting = 2;
    attack();
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
    monsterStats.style.display = "none";
}
function goStore(){
    update(locations[1]);
    monsterStats.style.display = "none";
}
function goForest(){
    update(locations[2]);
    monsterStats.style.display = "none";
}
function fightDragon(){
    update(locations[3]);
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[2].name;
    monsterHealthText.innerText = monsters[2].health;
}
function fightGoblin(){
    update(locations[4]);
    monsterStats.style.display = "block"
    monsterName.innerText = monsters[0].name;
    monsterHealthText.innerText = monsters[0].health;
}
function fightBeast(){
    update(locations[5]);
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[1].name;
    monsterHealthText.innerText = monsters[1].health;
}
//COSAS POR AÑADIR
/*
- Hacer funcionar las funciones de ataque
- Añadir funcion para ganar exp
- Añadir funcion para ganar oro
- Sonido ambiental en distintas localizaciones
- Sonido cuando atacas
- Animacion que sacude la pantalla cuando atacas
- Adaptar a pantallas moviles
- Añadir vibracion al telefono al atacar
*/
