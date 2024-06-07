import { SolarChargerData } from './SolarChargerData.js';
import { DataTable } from './DataTable.js';
import { ChartHandler } from './ChartHandler.js';

export class SolarChargerSection {
    constructor() {
        this.solarChargerData = new SolarChargerData();
    }

    render() {
        return `
            <div class="container">
                <h1 style="font-size: 32px;">Cargador Solar</h1>
                <form id="data-form">
                    <div class="form-group">
                        <label for="angle-range">Rango de Ángulo</label>
                        <select id="angle-range" name="angle-range">
                            <option value="0-30">0-30</option>
                            <option value="30-60">30-60</option>
                            <option value="60-90">60-90</option>
                            <option value="90-120">90-120</option>
                            <option value="120-150">120-150</option>
                            <option value="150-180">150-180</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="energy">Energía Generada (Wh)</label>
                        <input type="number" id="energy" name="energy" required>
                    </div>
                    <button type="submit">Agregar Datos</button>
                </form>
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Rango de Ángulo</th>
                            <th>Energía Generada (Wh)</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <canvas id="energy-chart"></canvas>
                <p>Carga Actual: <span id="current-charge">0</span> Wh</p>
            </div>
        `;
    }

    init() {
        const dataTable = new DataTable('data-table');
        const chartHandler = new ChartHandler('energy-chart');
        const form = document.getElementById('data-form');
        const currentChargeElement = document.getElementById('current-charge');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const angleRange = form.elements['angle-range'].value;
            const energy = form.elements['energy'].value;

            this.solarChargerData.addData(angleRange, energy);
            dataTable.addRow(angleRange, energy);
            chartHandler.updateChart(this.solarChargerData.getAngleRanges(), this.solarChargerData.getEnergies());

            currentChargeElement.textContent = this.solarChargerData.getCurrentCharge();

            form.reset();
        });
    }
}