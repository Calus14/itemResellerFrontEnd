<template>
  <div class="searchPage">
    <img alt="scrapper_pic" src="/assets/funnyIcon.jpg">
    <h3>Sites You Don't Hate (These will be searched)</h3>
    <SitePicker/>
    <h3>Enter Search </h3>
    <SearchSettings/>
    <h3>Subscribe For Updates</h3>
    <SubscriptionSettings/>
    <ItemList id="search_results_table"/>
  </div>
</template>

<script>
import ItemList from './ItemList.vue'
import SearchSettings from './SearchSettings.vue'
import SubscriptionSettings from './SubscriptionSettings.vue'
import SitePicker from './SitePicker.vue'

export default {
  name: 'SearchPage',

  components: {
    ItemList,
    SearchSettings,
    SubscriptionSettings,
    SitePicker,
  },

  props: {
  },

  data() {
    return {

    }
  },
  computed: {

  },

  methods: {

  },
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}


#search_results_table{
  width: 70%;
  padding: 50px;
  margin: 0 auto;
}

</style>
