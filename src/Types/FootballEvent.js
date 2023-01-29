/**
 * Imitation Enum to hold list of valid football event types
 */
class FootballEvent{
    static kickoff = new FootballEvent('kickoff');
    static goal = new FootballEvent('goal');
    static yellowcard = new FootballEvent('yellowcard');
    static redcard = new FootballEvent('redcard');
    static penalty = new FootballEvent('penalty');
    static halftime = new FootballEvent('halftime');
    static fulltime = new FootballEvent('fulltime');
    static extratime = new FootballEvent('extratime');
    static freekick = new FootballEvent('freekick');
    static corner = new FootballEvent('corner');

    constructor(name){
        this.name = name;
        Object.freeze(this);
    }
}
module.exports = FootballEvent;