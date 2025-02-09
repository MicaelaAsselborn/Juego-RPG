//ESCENARIOS

const locations = [
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