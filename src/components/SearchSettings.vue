<template>
    <b-container class="bv-example-row" >
        <b-row class="text-center justify-content-center">
            <b-col cols="1">
                <img alt="search_image" src="/assets/search.png" style="padding:0px">
            </b-col>
            <b-col cols="5">
                <input id="searchItemInput" maxlength="2048" type="text" class="form-control" placeholder="" aria-label="searchItem"
                       v-model="currentSearch"
                        @keyup="updateCurrentSearch()">
            </b-col>
            <b-col cols="1">
                <b-button @click="submitBasicSearch" type="submit" variant="primary">Search</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import {mapActions, mapMutations} from "vuex";
  export default {
    name: "SearchSettings",

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


    #searchItemInput{
        width: 100%;
    }


</style>
