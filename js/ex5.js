let table = document.createElement('table');
let tbody = document.createElement('tbody');

table.appendChild(tbody);
document.getElementById("body").appendChild(table);

for ( var i=1; i < 13; i++) {
    let row_1 = document.createElement('tr');
    let row_1_data_1 = document.createElement('td');
    let x = row_1_data_1.innerHTML = i;
    row_1.appendChild(row_1_data_1);
    tbody.appendChild(row_1);
    if ( i % 4 == 0){
        row_1_data_1.style.backgroundColor = " lightblue"
    }
}
