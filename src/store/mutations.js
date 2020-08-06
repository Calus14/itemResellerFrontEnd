import UserWebSocketController from "../utility/userWebSocketController";
import serverInfo from "../data/serverInfo";

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

  setCurrentUser:  (state, userCredentials) => {
    state.currentUserEmailAddress = userCredentials.email
    state.currentUserUUID = userCredentials.uuid


    let socketAddress = serverInfo.serverSocketAddress

    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      socketAddress = serverInfo.localSocketAddress+":"+serverInfo.localPort

    console.log(socketAddress)
    const userWebSocketController = new UserWebSocketController(socketAddress, state.currentUserUUID)
    state.currentUserWebsocket = userWebSocketController
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
