<template>
  <div class="mainPage">
    <h3>Enter Search </h3>
    <SearchSettings/>
    <h3>Subscribe To Be Updated When New Item Meets Search</h3>
    <SubscriptionSettings/>
    <ItemList id="search_results_table"/>
  </div>
</template>

<script>
import ItemList from './ItemList.vue'
import SearchSettings from './SearchSettings.vue'
import SubscriptionSettings from './SubscriptionSettings.vue'


export default {
  name: 'MainPage',

  components: {
    ItemList,
    SearchSettings,
    SubscriptionSettings,
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
