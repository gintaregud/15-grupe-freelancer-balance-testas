const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const month = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', "Lapkritis", 'Gruodis'];

let table = document.getElementById('table-info');

let htmlas = "";
let menuo = 0;
let balansas = 0;
for (let i = 0; i < account.length; i++) {
    menuo = account[i].month;
    balansas = account[i].income - account[i].expense;
    htmlas = htmlas +
        "<div class='table-row'><div class='cell'>" + i + "</div><div class='cell'>" + month[menuo - 1] + "</div><div class='cell'>" + account[i].income + "</div><div class='cell'>" + account[i].expense + "</div><div class='cell'>" + balansas + "</div></div>";
}

table.innerHTML = htmlas;