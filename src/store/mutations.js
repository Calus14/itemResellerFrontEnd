export default {

  setCurrentSearch: (state, search) => {
    state.currentSearch = search

  },

  setUserEmail: (state, email) => {
    state.userEmail = email
  },

  setPossibleSites: (state, sites) => {
    state.possibleSites = sites
    // Reset the selected sites
    state.selectedSites = []

  },

  setSearchResults: (state, results) => {
    state.searchResults = results

  }
}
