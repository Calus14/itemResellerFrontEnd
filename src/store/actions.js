import serverInfo from "../data/serverInfo"
import fetchWithTimeout from "../utility/fetchWithTimeout";

/* eslint-disable no-empty-pattern, no-console */
export default{
  sendBasicSearch: ({state, getters, commit}) =>{
    var searchItem = getters.getCurrentSearch

    var basicSearchUrl = new URL(serverInfo.serverUrl+"/"+serverInfo.basicSearchEndpoint)

    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      basicSearchUrl = new URL(serverInfo.localUrl+":"+serverInfo.localPort+"/"+serverInfo.basicSearchEndpoint)

    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'searchItem': searchItem,
        'websitesToSearch': state.selectedSites
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( basicSearchUrl, httpBody, 100000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the basic search: "+response.status)
        return;
      }

      response.json().then( (data) => {
        commit('setSearchResults', data['sortedItems'])
      })
    })

  },

  loginUser: ({state}, password) =>{
    var urlAsString = new URL(serverInfo.serverUrl+"/"+serverInfo.loginUserEndpoint)

    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      urlAsString = new URL(serverInfo.localUrl+":"+serverInfo.localPort+"/"+serverInfo.loginUserEndpoint)

    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'email': state.attemptedUserEmailAddress,
        "password" : password
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( urlAsString, httpBody, 5000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the userLogin: "+response.status)
      }
      response.json().then( (data) => {
        state.currentUserEmailAddress = state.attemptedUserEmailAddress
        state.currentUserUUID = data['userUniqueId']
      })
    })
  },

  createNewUser: ({state}, newUserObject) =>{
    var urlAsString = new URL(serverInfo.serverUrl+"/"+serverInfo.createUserEndpoint)

    console.log(newUserObject.emailAddress)
    console.log(newUserObject.password)
    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      urlAsString = new URL(serverInfo.localUrl+":"+serverInfo.localPort+"/"+serverInfo.createUserEndpoint)
    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'password' : newUserObject.password,
        'email' : newUserObject.emailAddress,
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( urlAsString, httpBody, 5000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the add new user command : "+response.status)
      }
      response.json().then( (data) => {
        state.currentUserEmailAddress = newUserObject.emailAddress;
        state.currentUserUUID = data['userUniqueId']
      })
    })
  },

  /*
  Because this is an asynchronous call ie. uses fetch for the response. It will return the string literal true
  or false. If you want to wait until this check is over just declare an empty string and have a while until the return
  is not empty then evaluate
   */
  checkUsersAlreadyExists: ({}, emailAddress) =>{
    var urlAsString = new URL(serverInfo.serverUrl+"/"+serverInfo.userExistsEndpoint)

    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      urlAsString = new URL(serverInfo.localUrl+":"+serverInfo.localPort+"/"+serverInfo.userExistsEndpoint)

    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'email': emailAddress
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( urlAsString, httpBody, 5000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the user exists check : "+response.status)
        return "false";
      }
      response.text().then( (data) => {
        return data
      })
    })
  },


  sendSubscription: ({state}, subscriptionObject) =>{
    var urlAsString = new URL(serverInfo.serverUrl+"/"+serverInfo.submitSubscriptionEndpoint)
    // Wasted too much time trying to get heroku to pass it in as part of process.env
    if(serverInfo.isLocalRun)
      urlAsString = new URL(serverInfo.localUrl+":"+serverInfo.localPort+"/"+serverInfo.submitSubscriptionEndpoint)

    console.log(subscriptionObject)
    console.log( parseInt(subscriptionObject.subDays))

    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'userId': state.currentUserUUID,
        'itemName': state.currentSearch,
        'pricePoint' : subscriptionObject.value,
        'priceType': subscriptionObject.type,
        'hoursToLive': parseInt(subscriptionObject.subDays)*24
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( urlAsString, httpBody, 100000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the subscription send: "+response.status)
        return;
      }

      response.json().then( (data) => {
        console.log(data)
        //TODO
      })
    })
  },
}
