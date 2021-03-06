class Calculate {
    static power = [3.4, 3.74, 4.08, 4.42, 4.76, 5.1, 5.44, 5.78, 6.12, 6.46, 6.8, 7.14, 7.48, 7.82, 8.16, 8.5, 8.84, 9.18, 9.52, 9.86, 15.3, 20.4, 30.6, 40.8, 49.64];
    static cost = [13900, 16700, 17600, 18550, 19500, 20370, 21300, 22250, 23350, 24350, 25500, 26400, 27600, 28900, 29630, 30700, 31100, 32300, 33500, 35200, 51150, 66100, 96500, 125700, 153000];

    static calculateCost(pow, panel) {
        const p = this.power.find((el) => el - pow > 0 && el - pow <= panel);
        return p ? this.cost[this.power.indexOf(p)] : false;
    }

    static otherInstallation(pow, panel) {
        const p = this.power.find((el) => el > pow);
        if (p) {
            if (this.cost[this.power.indexOf(p)]) return this.cost[this.power.indexOf(p)];
        } else {
            return 3*pow*1100;
        }
    }

    static getCost(pow, panel) {
        return this.calculateCost(pow, panel) ? `Szacowany koszt instalacji: ${this.calculateCost(pow, panel)+1000}zł` : `Koszt instalacji nie przekroczy: ${this.otherInstallation(pow, panel)+1000}zł`;
    }
}

export default Calculate;
