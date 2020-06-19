export default{

  //TODO if we need additional logic when retrieving things

  getCurrentSearch: (state) => {
    return state.currentSearch
  },

  getUserEmail: (state) => {
    return state.userEmail
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
