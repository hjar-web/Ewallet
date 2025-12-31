
const transactions = [
    { date: "30/12/2025", description: "Virement reçu", type: "+", montant: 3000 },
    { date: "29/12/2025", description: "Paiement facture", type: "-", montant: 1500 },
    { date: "28/12/2025", description: "Virement reçu", type: "+", montant: 500 },
    { date: "27/12/2025", description: "Achat en ligne", type: "-", montant: 200 },
];


const tbody = document.getElementById("recents");
const select = document.getElementById("choix");


function afficherTransactions(filtre) {
    tbody.innerHTML = ""; 

    transactions.forEach(tx => {
        
        if (filtre === "Toutes" || (filtre === "entrees" && tx.type === "+") || (filtre === "sorties" && tx.type === "-")) {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${tx.date}</td>
                <td>${tx.description}</td>
                <td>${tx.type === "+" ? "Entrée" : "Sortie"}</td>
                <td>${tx.montant} MAD</td>
            `;

            tbody.appendChild(tr);
        }
    });
}


afficherTransactions("Toutes");


select.addEventListener("change", () => {
    afficherTransactions(select.value);
});
