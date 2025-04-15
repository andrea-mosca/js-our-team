const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
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

const cardMemberEl = document.getElementById("card-member");

// * FUNZIONE CHE GENERA LA STRUTTURA DI UNA CARD
const createHTMLCard = (name, role, email, img) => {
  return `
    <div class="col col-md-6 col-lg-4 d-flex">
      <img src="./${img}" alt="${name}">
      <div class="text-bg-dark flex-grow-1 p-4">
        <h2 class="p-1">${name}</h2>
          <div class="p-1">${role}</div>
          <div class="p-1">${email}</div>
      </div>
    </div>
  `;
};
// *CICLO CEHE STAMPA UNA CARD PER OGNI MEMBRO
for(const member of teamMembers){
  const{name, role, email, img} = member;
cardMemberEl.innerHTML += createHTMLCard(name, role, email, img);
}