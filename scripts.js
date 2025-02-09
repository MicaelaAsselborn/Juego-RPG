//VARIABLES

let xp = 0;
let health = 100;
let gold= 10;
let currentWeaponIndex = 0;
let potions = 0;
let fighting = 0;
let monsterHealth;
let inventory = ["Palo"];

//QUERY SELECTORS

const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const goldText = document.querySelector("#gold-text");
const weaponsText = document.querySelector("#weapon-text");
const potionsText = document.querySelector("#potions-text");
const text = document.querySelector("#text");
const image = document.querySelector("img");
const audio = document.querySelector("#audio");
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

const locations = [
    {
        name: "Pueblo",
        "button text": ["Ir a la tienda", "Ir al bosque", "Ir a la montaña"],
        "button functions": [goStore, goForest, fightDragon],
        text: "Estas en el centro del pueblo, desde aqui puedes ver la tienda que regenta tu prima, la salida al bosque, y a lo lejos la montaña.",
        image: "img/town.jpg",
        audio: "audio/town.mp3"
    },
    {
        name: "Tienda",
        "button text": ["Comprar poción (10 oro)", "Comprar arma (30 oro)", "Salir de la tienda"],
        "button functions": [buyPotion, buyWeapon, goTown],
        text: "Te encuentras en la tienda. Tu prima te mira desde el mostrador, hay deseo en cada uno de sus tres ojos. Debes matar al dragón pronto.",
        image: "img/shop.jpg",
        audio: "audio/shop.mp3"
    },
    {
        name: "Bosque Oscuro",
        "button text": ["Atacar goblin", "Atacar hombre lobo", "Volver al pueblo"],
        "button functions": [fightGoblin, fightBeast, goTown],
        text: "Te encuentras en el bosque. Escuchas mostruos acechando cerca tuyo. Suenan como los ronquidos de tu madre.",
        image: "img/forest.jpg",
        audio: "audio/forest.mp3"
    },
    {
        name: "Attack Dragón",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackDragon, dodge, goTown],
        text: "Te encuentras en la \"montaña de la muerte\", sientes escalofrios, quizás sea por el frio, o quizás sea por el dragon de 20 metros del altura que se encuentra ante ti, relaminedose sus labios escamosos. Te recuerda a tu prima.",
        image: "img/dragon.jpg",
        audio: "audio/dragon.mp3"
    },
    {
        name: "Attack Goblin",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackGoblin, dodge, goForest],
        text: "Estas atacando un goblin. Es pequeño, feo y escurridizo. Te recuerda a tu hermano.",
        image: "img/goblin.jpg",
        audio: "audio/fight.mp3"
    },
    {
        name: "Attack Hombre lobo",
        "button text": ["Atacar", "Esquivar", "Huir"],
        "button functions": [attackBeast, dodge, goForest],
        text: "Estas atacando un hombre lobo. Sus colmillos enormes te recuerdan a tu tio.",
        image: "img/beast.jpg",
        audio: "audio/fight.mp3"
    },
    {
        name: "Monstruo derrotado",
        "button text": ["Volver al pueblo", "Volver al pueblo", "Volver al pueblo"],
        "button functions": [goTown, goTown, goTown],
        text: "El monstruo aulla de dolor con su último aliento y cae muerto. Has ganado algo de experiencia y has encontrado algo de oro en su cadaver. El olor que flota en el aire te trae recuerdos a los fines de semana en la casa de tus abuelos.",
        image: "img/victory.jpg",
        audio: "audio/victory.mp3"
    },
    {
        name: "Derrota",
        "button text": ["¿Jugar otra vez?", "¿Jugar otra vez?", "¿Jugar otra vez?"],
        "button functions": [restart, restart, restart],
        text: "Has muerto.",
        image: "img/defeat.jpg",
        audio: "audio/defeat.mp3"
    },
    {
        name: "Victoria",
        "button text": ["¿Jugar otra vez?", "¿Jugar otra vez?", "¿Jugar otra vez?"],
        "button functions": [restart, restart, restart],
        text: "¡Has derrotado al dragón! Victorioso, te dirijes al pueblo vecino en busca de novia, pero resulta que generaciones de relaciones cosanguineas no han dejado terriblemente deformada solo a tu familia, si no que también a ti, y ahora todas las chicas de Notcousins se espantan al verte. Quizás, si obvias su tercer ojo, tu prima no este tan mal...",
        image: "img/endGame.jpg",
        audio: "audio/endGame.mp3"
    }
]

//MONSTRUOS

const monsters = [
    {
        name: "Goblin",
        level: 5,
        health: 50,
        maxHealth: 50
    },
    {
        name: "Hombre Lobo",
        level: 20,
        health: 150,
        maxHealth: 150
    },
    {
        name: "Dragón",
        level: 60,
        health: 400,
        maxHealth: 400
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
        text.innerText = "No tienes más pociones."
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
    monsterStats.style.display = "block";
    health -= monsters[fighting].level;
    let damage = weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp);
    if (isMonsterHit()){
    monsterHealth -= damage;
    text.innerText = "El " + monsters[fighting].name + " te ataca y te causa " + monsters[fighting].level + " puntos de daño. Tu le devuelves el golpe con tu " + inventory[currentWeaponIndex] + " y le haces " + (weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1) + " puntos de daño."
    } else {
        text.innerText = "El " + monsters[fighting].name + " te ataca y te causa " + monsters[fighting].level + " puntos de daño. Tu fallas el golpe."
    }
    if (Math.random() <= .1 && inventory.length !== 1){
        currentWeaponIndex--
        text.innerText += " ¡Oh no! Tu " + inventory.pop() + " se ha roto!"
        weaponsText.innerText = inventory
    }
    monsterHealthText.innerText = monsterHealth;
    healthText.innerText = health;
    
    if (health <= 0){
        lose();
    } else if (monsterHealth <= 0 ){
        if (fighting === 2){
            winGame()
        } else {
            defeatMonster();
        }
    } 
}
function isMonsterHit(){
    return Math.random() > 0.2 || health < 20;
}
function dodge(){
    text.innerText = "Esquivas el ataque de el " + monsters[fighting].name + ".";
}
function lose(){
    restart()
    update(locations[7])
    monsterStats.style.display = "none"
}
function defeatMonster(){
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText= xp;
    update(locations[6])
}
function winGame(){
    update(locations[8])
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
    audio.src = location.audio;
    audio.load();
    audio.play();
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
    monsterHealth = monsters[2].maxHealth;
    monsterHealthText.innerText = monsters[2].maxHealth;
}
function fightGoblin(){
    update(locations[4]);
    monsterStats.style.display = "block"
    monsterName.innerText = monsters[0].name;
    monsterHealth = monsters[0].maxHealth;
    monsterHealthText.innerText = monsters[0].maxHealth;
}
function fightBeast(){
    update(locations[5]);
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[1].name;
    monsterHealth = monsters[1].maxHealth;
    monsterHealthText.innerText = monsters[1].maxHealth;
}
function restart(){
    xp = 0;
    health = 100;
    gold = 10;
    currentWeaponIndex = 0;
    inventory = ["Palo"];
    xpText.innerText = xp;
    healthText.innerText = health;
    goldText.innerText = gold;
    goTown()
}

