class Multiple {
    /**
     * 10の位が揃っていて、1の位を足すと10か判定する
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static is1stPlaceSum10(num0, num1) {        

        const first0 = num0 % 10,
            first1 = num1 % 10,
            second0 = Math.floor(num0 / 10),
            second1 = Math.floor(num1 / 10);
        
        return second0 === second1 && first0 + first1 === 10;
    }

    /**
     * 2乗か
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static isSquare(num0, num1) {
        return num0 === num1;
    }

    /**
     * 2のべき乗か
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static isExponentiationOf2(num0, num1) {
        const exp2 = [ 2, 4, 8, 16, 32, 64 ];
        return exp2.includes(num0) || exp2.includes(num1);
    }

    /**
     * どちらかが1桁
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static is1stPlace(num0, num1) {
        return num0 < 10 || num1 < 10;
    }

    /**
     * 1の位が0 
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static is1stPlaceEquals0(num0, num1) {
        return num0 % 10 === 0 || num1 % 10 === 0;
    }

    /**
     * 10の位と1の位が同じ 
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static isSame1st2ndPlace(num0, num1) {
        const first0 = num0 % 10,
            first1 = num1 % 10,
            second0 = Math.floor(num0 / 10),
            second1 = Math.floor(num1 / 10);

        return first0 === second0 || first1 === second1;
    }

    /**
     * どちらかが25
     * @param {number} num0 - 数値
     * @param {number} num1 - 数値
     * @return {boolean} - ture: ok, false: ng
     */
    static isEqual25(num0, num1) {
        return num0 === 25 || num1 === 25;
    }

}