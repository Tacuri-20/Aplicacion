export class SolarChargerData {
    constructor() {
        this.angleRanges = [];
        this.energies = [];
        this.currentCharge = 0;
    }

    addData(angleRange, energy) {
        this.angleRanges.push(angleRange);
        this.energies.push(energy);
        this.currentCharge += parseInt(energy, 10);
    }

    getAngleRanges() {
        return this.angleRanges;
    }

    getEnergies() {
        return this.energies;
    }

    getCurrentCharge() {
        return this.currentCharge;
    }
}
