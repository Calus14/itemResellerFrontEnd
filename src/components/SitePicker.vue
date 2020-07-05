<template>
    <b-container >
        <img class="sitePicture" v-for="site in possibleSites" :key="site.id"
             :src="imageForSite(site)"
             :alt="site"
             @click="clickSite(site)"
             :class="selectedSitesWrapper.includes(site) ? 'selected' : ''" />
    </b-container>
</template>

<script>
  export default {
    name: "SitePicker",

    data(){
      return{
        possibleSites: this.$store.state.possibleSites
      }
    },

    computed:{
      selectedSitesWrapper: function(){
        return this.$store.state.selectedSites
      }
    },

    methods:{
      imageForSite(siteName){
        var imagePath =  "/assets/"+siteName+".jpg"
        return imagePath.toLowerCase()
      },

      clickSite(site){
        console.log("clicked site named: "+site)
        if( this.$store.state.selectedSites.includes(site) ){
          console.log("Already in the selected Sites")
          this.$store.state.selectedSites = this.$store.state.selectedSites.filter( function(value){ return value != site; } )
        }
        else{
          this.$store.state.selectedSites.push(site)
        }

      }
    }
  }
</script>

<style scoped>

    .sitePicture{
        padding: 3px;
        cursor: pointer !important;
        margin: 2.5%;
        border-radius: 10px;
        border: 3px solid lightgray;
    }

    .sitePicture:hover {
        border-color: #000;
    }

    .sitePicture.selected {
        border-color: green;
    }


</style>
