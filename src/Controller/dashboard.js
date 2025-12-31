import { comptesUtilisateurs } from "../Model/data.js";; 

document.addEventListener("DOMContentLoaded", () => {

  
  let currentUser = JSON.parse(sessionStorage.getItem("currentuser")) || comptesUtilisateurs[0];

  
  if(!sessionStorage.getItem("currentuser")){
    sessionStorage.setItem("currentuser", JSON.stringify(currentUser));
  }

  const balance = document.getElementById("balance");
  const transactions_table = document.getElementById("transactions").querySelector("tbody");
  const payer = document.getElementById("payer");

  // Afficher le solde
  balance.textContent = currentUser.compte.solde + " MAD";


  const afficherTransaction = (tab) => {
    transactions_table.innerHTML = "";
    tab.forEach((u) => {
      const row = document.createElement("tr");
      row.innerHTML =
        "<td>" + u.date + "</td>" +
        "<td>" + u.name + "</td>" +
        "<td>" + (u.type ? u.type : "") + "</td>" +
        "<td>" + u.amount + " MAD</td>";
      transactions_table.appendChild(row);
    });
  };

  afficherTransaction(currentUser.transaction);


  function handlePayer(montant) {
    return new Promise((resolve, reject) => {
      if (montant <= currentUser.compte.solde) {
        resolve("Paiement réussi");
      } else {
        reject("Paiement impossible : solde insuffisant");
      }
    });
  }

  
  payer.addEventListener('click', () => {
    handlePayer(500)
      .then(message => {
        console.log(message);

     
        currentUser.compte.solde -= 500;
        balance.textContent = currentUser.compte.solde + " MAD";

        // Ajouter la transaction
        currentUser.transaction.push({
          date: new Date().toLocaleDateString(),
          name: "Paiement",
          type: "-",
          amount: 500
        });

        afficherTransaction(currentUser.transaction);

     
        sessionStorage.setItem("currentuser", JSON.stringify(currentUser));
      })
      .catch(erreur => alert(erreur));
  });

});

