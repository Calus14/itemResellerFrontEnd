export default{

  //TODO if we need additional logic when retrieving things

  getCurrentSearch: (state) => {
    return state.currentSearch
  },
  

  getPossibleSites: (state) => {
    return state.possibleSites
  },

  getSelectedSites: (state) => {
    return state.selectedSites
  },

  getSearchResults: (state) => {
    return state.searchResults
  }




}
