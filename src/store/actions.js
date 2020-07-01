import serverInfo from "../data/serverInfo"
import fetchWithTimeout from "../utility/fetchWithTimeout";
export default{

  sendBasicSearch: ({getters, commit}) =>{
    var searchItem = getters.getCurrentSearch
    var basicSearchUrl = new URL(serverInfo.serverUrl+":"+serverInfo.serverPort+"/"+serverInfo.basicSearchEndpoint+"/")
    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'searchItem': searchItem,
        'websitesToSearch': ['Ebay', 'Amazon']
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

  sendSubscription: (state, emailAddress, pricePointType, priceValue) =>{

    var basicSearchUrl = new URL(serverInfo.serverUrl+":"+serverInfo.serverPort+"/"+serverInfo.submitSubscription+"/")
    var httpBody = {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        'emailAddress': emailAddress,
        'pricePointType': pricePointType,
        'priceValue': priceValue
      })
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( basicSearchUrl, httpBody, 100000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the basic search: "+response.status)
        return;
      }

      response.json().then( (data) => {
        print(data)
        //TODO
      })
    })
  },
}
