export class DataTable {
    constructor(tableId) {
        this.table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    }

    addRow(angleRange, energy) {
        const row = this.table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = angleRange;
        cell2.innerHTML = energy;
    }
}
