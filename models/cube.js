const { v4: uuidv4 } = require('uuid');

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty
    }
}

module.exports = { Cube }