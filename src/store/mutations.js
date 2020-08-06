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
  },

  deleteSubscription: (state, subId) => {
    state.userSubscriptions.filter( (sub)=> {
      if(sub.subscriptionId == subId){
        const deleteIndex = state.userSubscriptions.indexOf(sub)
        state.userSubscriptions = state.userSubscriptions.splice(deleteIndex, 1)
      }
    })

  },

}
