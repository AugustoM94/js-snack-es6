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
            id: 78,
            nome: 'Augusto Rosso',
            sommaVoti: 78,
            
        },

        {
            id: 200,
            nome: 'Giusy Verde',
            sommaVoti: 100,
            
        },
        {
            id: 47,
            nome: 'Vito Loria',
            sommaVoti: 65,
            
        },
        {
            id: 23,
            nome: 'Francesco Conte',
            sommaVoti: 78,
            
        },
        {
            id: 157,
            nome: 'Valentina Vignali',
            sommaVoti: 60,
            
        },
        {
            id: 78,
            nome: 'Bea Bei',
            sommaVoti: 74,
            
        },
        {
            id: 153,
            nome: 'Belen Rodriguez',
            sommaVoti: 83,
            
        },
        {
            id: 98,
            nome: 'Gue Pegueno',
            sommaVoti: 91,
            
        },
        {
            id: 126,
            nome: 'Megan Fox',
            sommaVoti: 99,
            
        },
  ]

  const nuovaAula = studenti.map((el)=>(el.nome.toLocaleUpperCase()));

  console.log(nuovaAula);

  const studentiPromossi = studenti.filter((element)=> element.sommaVoti > 70);

  console.log(studentiPromossi);

  const studentiTop = studenti.filter(element => element.sommaVoti > 70 && element.id > 120);

  console.log(studentiTop);