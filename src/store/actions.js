import serverInfo from "../data/serverInfo"
export default{

  sendBasicSearch: (state, searchItem) =>{
    state.commit("setCurrentSearch", (searchItem))
    var basicSearchUrl = new URL(serverInfo.serverUrl+":"+serverInfo.serverPort+"/"+serverInfo.basicSearchEndpoint+"/"+searchItem)
    var httpBody = {
      mode: 'no-cors',
      method: 'GET',
    }

    // Now send down the request with fetch, take the future and set the possible states when it is done
    fetch( basicSearchUrl, httpBody).then( (response) => {
      if( response.status !== 200) {
        console.log("Error while running the basic search: "+response.status)
        return;
      }

      response.json().then( (data) => {
        console.log(data)
        state.commit('setSearchResults', data['sortedItemList'])
      })
    })
  },
}
