export class ChartHandler {
    constructor(canvasId) {
        this.ctx = document.getElementById(canvasId).getContext('2d');
        this.chart = null;
    }

    updateChart(angleRanges, energies) {
        if (this.chart) {
            this.chart.destroy();
        }

        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: angleRanges,
                datasets: [{
                    label: 'Energía Generada (Wh)',
                    data: energies,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
