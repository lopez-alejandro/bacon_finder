var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// the results from api search call
var _searchResults = [];

/**
 * update the search results we got from the API call.
 * @param  {array} results the search results
 */
function update(results){
  _results = results;
}

var SearchStore = assign({}, EventEmitter.prototype, {
  /**
   * Get all the search results
   * @return {array} array of search results
   */
  getAllResults: function(){
    return _results;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  /**
   * Adds a change listener. will be called by a controller view that wants to know when the store updates. callback is callled on a CHANGE_EVENT happens. that callback lets the controller view know that the store has updated and so the controller view sends new information to child views through props.
   * @param  {Function} callback for the controller view
   */
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(obj){

  switch(obj.action.actionType){
    case SearchConstants.MOVIE_SEARCH:
      //update our search results
      update(obj.action.results);
      //now emit a change for the controller view
      emitChange();
  }
})
