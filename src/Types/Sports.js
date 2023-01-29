const FootballEvent = require("./FootballEvent");

/**
 * Imitation Enum to hold list of valid Sports
 */
class Sports {
    static football = new Sports('football', FootballEvent)
    constructor(name, eventType){
        this.name = name;
        this.eventType = eventType;
        Object.freeze(this);
    }
}

module.exports = Sports;