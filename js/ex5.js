let table = document.createElement('table');
let tbody = document.createElement('tbody');

table.appendChild(tbody);
document.getElementById("body").appendChild(table);

let row_1 = document.createElement('tr');
let row_1_data_1 = document.createElement('td');
row_1_data_1.innerHTML = "1";
row_1.appendChild(row_1_data_1);
tbody.appendChild(row_1);