<template>
    <div class="Home Page">
        <h2>For When You Want To Buy Something But Are As Broke As The U.S. Economy</h2>
        <h4> Also I Like Turtles </h4>
        <img class="centerImages" src="/assets/constructionImage.png">
        <p class="explanation">Once Constructed this website will allow anyone to search all major selling websites for items and aggregate the data to find the best prices.</p>
        <p class="explanation">More usefully if you are broke and can only pay a set amount, you can subscribe to be notified whenever a flash sale or listing on a site for that item meets your criteria.</p>
        <img class="centerImages" :src="gifUrl">
    </div>
</template>

<script>
  export default {
    name: "HomePage",

    data(){
      return {
        gifUrl: null
      }
    },

    // Creates the random gif cause im bored
    beforeMount: function () {
      var gifNumber = Math.floor(Math.random() * 6) + 1
      this.gifUrl = "/assets/gifs/fun"+gifNumber+".gif"
    },

    methods:{

    }

  }
</script>

<style scoped>

    .centerImages{
        padding: 50px;
    }
</style>
