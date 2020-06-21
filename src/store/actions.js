import serverInfo from "../data/serverInfo"
import fetchWithTimeout from "../utility/fetchWithTimeout";
export default{

  sendBasicSearch: (state, searchItem) =>{
    state.commit("setCurrentSearch", (searchItem))
    var basicSearchUrl = new URL(serverInfo.serverUrl+":"+serverInfo.serverPort+"/"+serverInfo.basicSearchEndpoint+"/"+searchItem)
    var httpBody = {
      method: 'GET',
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetchWithTimeout( basicSearchUrl, httpBody, 100000 ).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the basic search: "+response.status)
        return;
      }

      response.json().then( (data) => {
        console.log(data)
        state.commit('setSearchResults', data['sortedItems'])
      })
    })
  },
}
