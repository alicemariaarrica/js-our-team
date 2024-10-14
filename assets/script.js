//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
//(trovate l’array del team all’interno della cartella in allegato)
 //1. creare un array di oggetti con le info di ogni persona per card
 //2. creare il iclo for dove iterare gli oggetti 
 //3. all'interno del ciclo devo estrarre i valori delle proprietà di ogni oggetto (nome, ruolo, email, immagine) per 
 //poter utilizzare questi dati e inserirli nel markup HTML per ogni card e mostrare le informazioni del membro del team nel layout
 //4.creo il markup HTML (il contenuto della card) per ciascun membro
//5.inserisco il markup generato all'interno di un contenitore specifico nella pagina (teamContainer) utilizzando innerHTML
//6.mi assicuroche il ciclo aggiunga ogni card dinamicamente al DOM, aggiornando il contenitore con le nuove card


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cardContainer = document.getElementById('cardContainer'); // //seleziono il contenitore dove verranno inserite le card


for (let i = 0; i < teamMembers.length; i++) {
  
  let teamMember = teamMembers[i]; //// estraggo l'elemento corrente dall'array teamMembers in ogni iterazione
  
 
  let name = teamMember.name;
  let role = teamMember.role;
  let email = teamMember.email;
  let img = teamMember.img;

  
  
  let markup = 
    '<div class="col-md-4 col-lg-3">' +
      '<div class="card h-100">' +
        '<img src="' + img + '" class="card-img-top" alt="' + name + '">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + name + '</h5>' +
          '<p class="card-text">' + role + '</p>' +
          '<p class="card-text"><small class="text-muted">' + email + '</small></p>' +
        '</div>' +
      '</div>' +
    '</div>';

  
  cardContainer.innerHTML += markup // inserisco il markup generato nel contenitore del team

}