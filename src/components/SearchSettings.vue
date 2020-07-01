<template>
    <div id="search_box" class="main_search">
        <div id="div1">
            <img alt="search_image" src="../assets/search.png">
        </div>
        <div id="div2">
            <input id="searchItemInput" maxlength="2048" type="text" class="form-control" placeholder="" aria-label="searchItem"
                   v-model="currentSearch"
                    @keyup="updateCurrentSearch()">
        </div>
        <div id="div3">
            <b-button @click="submitBasicSearch" type="submit" variant="primary">Search</b-button>
        </div>
    </div>
</template>

<script>
  import {mapActions, mapMutations} from "vuex";
  export default {
    name: "SearchSettings.vue",

    data() {
      return {
        currentSearch: ""
      }
    },

    methods: {
      ...mapMutations([
        "setCurrentSearch"
      ]),

      ...mapActions([
        "sendBasicSearch"
      ]),

      updateCurrentSearch(){
        this.setCurrentSearch(this.currentSearch)
      },

      submitBasicSearch(){
        this.sendBasicSearch()
      }
    },
  }
</script>

<style scoped>

    #div2{
        width: 100%;
    }

    #searchItemInput{
        width: 100%;
    }

    .main_search {
        width : 50%;
        padding: 10px 50px 10px;
        display: flex;
        margin: 0 auto;
    }
</style>
