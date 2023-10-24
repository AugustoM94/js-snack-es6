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