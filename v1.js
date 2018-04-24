"use strict";

const HashMap = require("hashmap");
const eventListeners = new HashMap();
const EventListener = require('./lib/EventListener');
const Listeners = require('./lib/Listeners');

class Stateless {
  /**
   * @function addEvent Adds an event to be listened to.
   * @param {string} eventName The event name.
   * @param {function} callback The callback function if async.
   */
  addEvent(eventName, callback) {
    if (!eventListeners.has(eventName)) {
      eventListeners.set(eventName, new Listeners());
    }
    if (callback) {
      callback();
    }
  }

  /**
   * @function containsEvent Returns if the system contains the event by name.
   * @param {string} eventName The event name.
   * @param {function} callback The callback function if async.
   */
  containsEvent(eventName, callback) {
    if (callback) {
      callback(eventListeners.has(eventName));
    }
    return eventListeners.has(eventName);
  }

  /**
   * @function removeEvent Removes an event.
   * @param {string} eventName
   * @param {function} callback
   */
  removeEvent(eventName, callback) {
    if (eventListeners.has(eventName)) {
      eventListeners.remove(eventName);
    }
    if (callback) {
      callback();
    }
  }

  /**
   * @function clear Clears events and their listeners.
   * @param {function} callback Callback function.
   */
  clear(callback) {
    eventListeners.clear();
    if (callback) {
      callback();
    }
  }

  listenTo(eventName, listener, callback){
    if(eventListeners.has(eventName)){
        const event = eventListeners.get(eventName);
    }
  }

}

var initializer = function() {
  return new Stateless();
};

module.exports = initializer;
