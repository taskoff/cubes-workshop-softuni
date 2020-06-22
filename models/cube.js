const v4 = require('uuid');

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        id = v4();
        this.name = name;
        this.description = this.description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty
    }
}

module.exports = { Cube }