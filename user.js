//  timestamp(dataUser[1].picture.medium); nbre de jours memebre
//  dataUser[1].name.first; nom
// parseDatedataUser[1].dob.date;  date d'adhesion
//  dataUser[1].location.country; pays
//   timestampDate(dataUser[1].registered.date); nbre de jours memebre
let ul = document.querySelector("ul");
console.log(ul);
let dataUser = [];

async function user() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (dataUser = data.results));
  console.log(dataUser);
  affichage();
  // console.log(membres);
}
user();

// modifions l'affichage de la date
function parseDate(dateChaine) {
  let date = new Date(dateChaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
  // console.log(date);
}

//trouvons le timesatmp
function timestampDate(dateChaine) {
  let toDay = new Date();
  toDay = Date.parse(toDay);
  let timestamp = Date.parse(dateChaine);
  let nbJours = (toDay - timestamp) / 8.64e7;
  return nbJours;
  // console.log(Math.ceil(nbJours));
}

// affichage des membres
function affichage() {
  dataUser.forEach((user) => {
    url = user.picture.large;
    name = user.name.first;
    ville = user.location.country;
    date = parseDate(user.dob.date);
    timestamp = Math.ceil(timestampDate(user.registered.date));
    // console.log(user.dob.date);
    membre = `<li>
    <div class="image">
            <img src="${url}" alt="" height="90"></div>
            <span class="name">${name}</span>
            <p class="first"><span class="ville">${ville}</span>,
                <span class="date">${date}</span>
            </p>
            <p class="second">Membre depuis : <span class="timeStamp">${timestamp}</span></p>
        </li>`;

    ul.innerHTML += membre;
  });
}
