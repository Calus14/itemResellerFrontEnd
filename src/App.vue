<template>
  <v-app>
    <NavigationBar/>
    <router-view/>
  </v-app>
</template>

<script>
  import NavigationBar from "./components/NavigationBar";
  import {mapActions} from "vuex";
  export default {
    name: 'App',
    components: {
      NavigationBar
    },
    methods: {
      ...mapActions([
        "sendHeartBeat"
      ]),
    },
    mounted(){
      this.$worker.run( () => {
        console.log("Mounted and started");
        var sendTime = 600
        var shouldSend = true;
        var sendFunction  = function(){
          console.log("Sending A Pump");
          var heartbeatUrl = new URL( "https://item-reseller-alpha.herokuapp.com/heartbeat")
          fetch(heartbeatUrl,
                  { mode: 'no-cors',
                    method:'GET'
                  })
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
    heigh: 100vh;
  }
</style>