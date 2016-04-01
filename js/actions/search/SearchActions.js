var react = require('react');
var AppDispatcher = require("../../dispatcher/AppDispatcher");
var SearchConstants = require('../../constants/SearchConstants');

var $ = require('jquery');
/**
 * builds a searchURL based on user searchText
 * @param  {string} text the user search text
 * @return {string}      the url used to make an API call
 */
function buildURL(text, isMovie){

  var urlBase;
  if(isMovie){
    urlBase =  "https://api.themoviedb.org/3/search/movie?query=";
  }
  var apiKey = "&api_key=0fc00f90bdeb1fa5fbae39973d8c709d";
  // read in the user input from the event
  var userInput = text;
  //console.log(this.state.searchText);
  // start our search url
  var searchURL = urlBase;
  // split up every word in the user's search to individual strings
  var searchTerms = userInput.split(" ");
  // add every word in users input to the search url
  for (var i = 0; i < searchTerms.length; i++) {
    searchURL = searchURL + searchTerms[i];
    if(i != searchTerms.length - 1){
      searchURL = searchURL +  "-";
    }

  }
  // finish the search by appending our api key to the searchURL
  searchURL += apiKey;
  //console.log(searchURL);
  return searchURL;
}

function makeRequest(url,handler){
  $.ajax({
      type: 'GET',
      url: url,
      dataType: "jsonp",
      crossDomain: true,
      success: handler,
      error: function(request, status, error) {
          console.log(error);
      }
    });
}

function buildMovieAction(data){

  var action = {
    actionType: SearchConstants.MOVIE_SEARCH,
    results: data.results
  }
  AppDispatcher.handleViewAction(action);
}

var SearchActions = {
  movieSearch: function(searchText){
    console.log(searchText);
    if(searchText.length > 0){
      var url = buildURL(searchText, true);
      console.log(url);
      makeRequest(url, this.buildMovieAction);
    }
  },
  personSearch: function(searchText){

  }
}

module.exports = SearchActions;
