function generateRandomNumber(min, max) {
    if (min === undefined || max === undefined) {
        return Math.random();
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = generateRandomNumber;
