<template>
    <div id="app">

      <img alt="scrapper_pic" src="./assets/funnyIcon.jpg">
      <MainPage/>

    </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  import {mapActions} from "vuex";

  export default {
    name: 'App',
    components: {
      MainPage
    },

    methods: {
      ...mapActions([
        "sendHeartBeat"
      ]),
    },

    mounted(){
      this.$worker.run( () => {
        console.log("Mounted and started");
        var sendTime = 10
        var shouldSend = true;

        var sendFunction  = function(){
          console.log("Sending A Pump");
          var heartbeatUrl = new URL( "https://item-reseller-alpha.herokuapp.com/heartbeat")

          fetch(heartbeatUrl,
            { mode: 'no-cors',
              method:'GET'
            })
          console.log("Point 1")
        }

        while(shouldSend) {
          console.log("Poor Man's wait")
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < (sendTime*1000) );
          sendFunction()
        }
      })
    }
  }
</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    #background-color: #5487fe;
  }
</style>
