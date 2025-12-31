// data.js
const comptesUtilisateurs = [
  {
    nom:"Nada",
    email: "Nada@gmail.com",
    password: "1111",
    compte:{
      numcompte:"9642",
      solde: 199500,
      devise:"MAD"
    },
    transaction: [
      { type: "-", name: "virement", date: "22/12/2025", amount: "4000" },
      { name: "virement", date: "23/12/2025", amount: "1000" },
      { type: "+", name: "salaire", date: "1/12/2025", amount: "19000" },
      { type: "-", name: "virement", date: "31/12/2025", amount: "7000" }
    ]
  }
];

function finduser(email,password){
    return comptesUtilisateurs.find(user => user.email === email && user.password === password);
}

function finduserBynumcompte(nom,num){
    return comptesUtilisateurs.find(user => user.nom === nom && user.compte.numcompte === num);
}

// ✅ Export complet
export { comptesUtilisateurs, finduser, finduserBynumcompte };
