module.exports = class ProgressBar {

    /**
     * The ProgressBar constructor.
     * @param {number} max The max
     * @param {string[]} characters The chars
     * @param {string[]} borders The borders
     * @constructor
     */

    constructor(max = 5, characters = ['#', '~'], borders = ['[', ']']) {
        this.max = max;

        this.characters = characters;
        this.borders = borders;

        console.clear();
        console.log(`${this.borders[0]}${this.characters[1].repeat(20)}${this.borders[1]}`);
    };

    current = 0;

    /**
     * Normalize a number.
     * @param {number} number The number
     * @returns {number}
     * @private
     */

    normalize(number) {
        if (number > this.max) number = number - this.max;

        if (number > this.max) number = this.normalize(number);

        return number;
    };

    /**
     * Normalize a negative number.
     * @param {number} number The number
     * @returns {number}
     */

    negativeNormalize(number) {
        ++number;

        if (number <= 0) number = this.max + number;

        if (number < 0) number = this.negativeNormalize(number);

        return number;
    };

    /**
     * Set the progress bar to a stage.
     * @param {number} number The stage
     * @returns {true}
     */

    set(number) {
        if (number < 0) this.current = this.negativeNormalize(number);
        else this.current = this.normalize(number);

        console.clear();
        console.log(`${this.borders[0]}${this.characters[0].repeat(this.current / this.max * 20)}${this.characters[1].repeat(20 - '#'.repeat(this.current / this.max * 20).length)}${this.borders[1]}`);

        return true;
    };

    /**
     * Reload the progress bar
     * @returns {true}
     */

    reload() {
        console.clear();
        console.log(`${this.borders[0]}${this.characters[0].repeat(this.current / this.max * 20)}${this.characters[1].repeat(20 - '#'.repeat(this.current / this.max * 20).length)}${this.borders[1]}`);

        return true;
    };

    /**
     * Set to the next stage.
     * @returns {true}
     */

    next() {
        if (this.current < this.max) ++this.current;
        else this.current = 0;
        
        console.clear();
        this.reload();

        return true;
    };

    /**
     * Set to the previous stage.
     * @returns {true}
     */

    previous() {
        if (this.current > 0) --this.current;
        else this.current = this.max;

        console.clear();
        console.log(`${this.borders[0]}${this.characters[0].repeat(this.current / this.max * 20)}${this.characters[1].repeat(20 - '#'.repeat(this.current / this.max * 20).length)}${this.borders[1]}`);

        return true;
    };
};