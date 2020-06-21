<template>
  <div class="mainPage">
    <h3>Enter Search </h3>
    <div id="search_box" class="main_search">
      <div id="div1">
        <img alt="search_image" src="../assets/search.png">
      </div>
      <div id="div2">
        <input id="searchItemInput" maxlength="2048" type="text" class="form-control" placeholder="" aria-label="searchItem"
               v-model="currentSearch">
      </div>
      <div id="div3">
        <b-button @click="submitBasicSearch" type="submit" variant="primary">Search</b-button>
      </div>
    </div>


    <div id="search_results_table"
         v-if="this.getSearchResults.length != 0" >

      <div>
        <b-table striped hover :fields="this.fields" :items="this.searchResultItems">
          <template v-slot:cell(Item)="item">
            <span v-html="item.value"></span>
          </template>
        </b-table>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'MainPage',

  props: {
  },

  data() {
    return {
      currentSearch: "",
      fields: [
        {
          key: "Item",
          sortable: true
        },
        {
          key: "Price",
          sortable: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      "getSearchResults"
    ]),

    searchResultItems(){
      var items = []
      this.getSearchResults.forEach( item => {
        items.push( {
          "Item" : "<a href=\""+item["Link"]+"\">"+item["Name"]+"</a>",
          "Price" : item["Price"]
        } )
      })

      return items
    }


  },

  methods: {
    ...mapActions([
      "sendBasicSearch"
    ]),

    submitBasicSearch(){
      console.log("Submitting search for "+this.currentSearch)
      this.sendBasicSearch(this.currentSearch)
    }
  },

}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

#div2{
  width: 100%;
}

#searchItemInput{
  width: 100%;
}

.main_search {
  width : 50%;
  padding: 50px;
  display: flex;
  margin: 0 auto;
}

#search_results_table{
  width: 70%;
  padding: 50px;
  margin: 0 auto;
}

</style>
