
//#SNACK1

const listaVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]
const tableName = "Tavolo Vip";

const segnaposti = listaVip.map((ospite, index) => ({
    tableName: tableName,
    guestName: ospite,
    place: index + 1
}));

console.log(segnaposti);

/*SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120*/

const studenti = [

    {
        id: 213,
        nome: 'Marco della Rovere',
        Grades: 78,

    },

    {
        id: 213,
        nome: 'Paola Cortellessa',
        Grades: 96,

    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        Grades: 48,

    },
    {
        id: 145,
        nome: ' Gaia Borromini',
        Grades: 74,

    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        Grades: 68,

    },
    {
        id: 102,
        nome: 'Bea Bei',
        Grades: 74,

    },
    {
        id: 153,
        nome: 'Piero della Francesca',
        Grades: 50,

    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        Grades: 84,

    },
]

const nuovaAula = studenti.map((el) => (el.nome.toLocaleUpperCase()));

console.log(nuovaAula);

const studentiPromossi = studenti.filter((element) => element.Grades > 70);

console.log(studentiPromossi);

const studentiTop = studenti.filter(element => element.Grades > 70 && element.id > 120);

console.log(studentiTop);



//#SNACK3

/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/

const bici_da_corsa = [

    {
        name: 'Grizl 8 1by',
        peso: 10.46,

    },
    {
        name: 'Licorne - Mountain bike ',
        peso: 22,

    },
    {
        name: 'Winora',
        peso: 16.50,

    }
]

let biciPesoMinore = bici_da_corsa[0];
let biciclette;

for (biciclette of bici_da_corsa) {
    if (bici_da_corsa.peso < biciPesoMinore.peso) {
        biciPesoMinore = bici_da_corsa;
    }
}

console.log(`La bici con peso minore è ${biciPesoMinore.name} con un peso di ${biciPesoMinore.peso} kg.`);



/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS 
Stampare in pagina oltre che in console!*/


//creato array con squadre di calcio
const footballTeam = [

    {
        name: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Lipsia',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Arsenal',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Barcellona',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]
footballTeam.forEach((element) => {
    element.puntiFatti = getRandomNumber(0, 114);
    element.falliSubiti = getRandomNumber(0, 1000);
})

console.log(footballTeam)




const newFootballTeam = footballTeam.map(({ name, falliSubiti }) => ({
    name,
    falliSubiti,
}));

console.log(newFootballTeam)


const div = document.getElementById('body');
newFootballTeam.forEach((team) => {
    const paragraph = document.createElement('p');
    paragraph.textContent =`
       Squadra: ${team.name},
       Falli subiti:  ${team.falliSubiti}
       `
    div.appendChild(paragraph);
});




function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}