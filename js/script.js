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
            id: 213 ,
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

  const nuovaAula = studenti.map((el)=>(el.nome.toLocaleUpperCase()));

  console.log(nuovaAula);

  const studentiPromossi = studenti.filter((element)=> element.Grades > 70);

  console.log(studentiPromossi);

  const studentiTop = studenti.filter(element => element.Grades > 70 && element.id > 120);

  console.log(studentiTop);