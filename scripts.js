//VARIABLES

let xp = 0;
let health = 100;
let gold= 150;
let currentWeaponIndex = 0;
let potions = 0;
let fighting;
let monsterHealth;
let inventory = ["Palo", "Daga", "Lanza", "Espada"];

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
const buttonPotion = document.querySelector("#potion")


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
        health: 150
    },
    {
        name: "Dragón",
        level: 100,
        health: 500
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
}
function goStore(){
    update(locations[1]);
}
function goForest(){
    update(locations[2]);
}
function fightDragon(){
    update(locations[3]);
}
function fightGoblin(){
    update(locations[4]);
    monsterHealthText = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealthText
}
function fightBeast(){
    update(locations[5]);
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
