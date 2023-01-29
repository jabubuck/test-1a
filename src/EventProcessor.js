const Sports = require('./Types/Sports');

/**
 * Event processor to handle all type of sports events
 */
class EventProcessor {
    constructor(storage){
        this.storage = storage;
    }

    /**
     * Process an incoming Sport Event
     * @param {EventInterface} incomingEvent 
     * @returns {boolean} If sport is invalid return a boolean, if event was fully processed return true
     */
    processEvent(incomingEvent){
        return Object.keys(Sports).includes(incomingEvent.getSport()) ? 
            this.processEventType(incomingEvent, Sports[incomingEvent.getSport()].eventType) : false;
            //This would ideally be expanded with error cases
    }

    /**
     * Processes an event against an event type and if valid attempts to store
     * @param {EventInterface} incomingEvent 
     * @param {any} eventType Currently accepts football events only
     * @returns {boolean} If invalid event type or storage fails return false
     */
    processEventType(incomingEvent, eventType){
        return Object.keys(eventType).includes(incomingEvent.getEventType()) ?
            this.storage.store(incomingEvent) : false;
        //This would ideally be expanded with error cases and retrying for failed stores
    }
}
module.exports = EventProcessor;


