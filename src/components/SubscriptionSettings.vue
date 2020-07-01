<template>
    <b-container class="bv-example-row" >
        <b-row class="text-center">
            <b-col cols="10">
                <b-row class="text-center">
                    <b-col cols="3">
                        <h6 style="font-weight:bold">Email Address</h6>
                    </b-col>
                    <b-col cols="9">
                        <input maxlength="2048" type="text" class="form-control" placeholder="your@gmail.com" aria-label="searchItem"
                               v-model="userEmail">
                    </b-col>
                </b-row>
                <b-row no-gutters class="text-center">
                    <b-col cols="2">
                        <h6 style="font-weight:bold">Dollar or Percent</h6>
                    </b-col>
                    <b-col cols="5">
                        <b-form-select v-model="pricePointType" :options="pricePointTypes"></b-form-select>
                    </b-col>
                    <b-col cols="5">
                        <input maxlength="2048" type="number" class="form-control" placeholder="100" aria-label="searchItem"
                               v-model="pricePointValue">
                    </b-col>
                </b-row>
                <b-row no-gutters class="text-center">
                    <b-col cols="3">
                        <h6 style="font-weight:bold">Length Of Subscription (Days)</h6>
                    </b-col>
                    <b-col cols="3">
                        <input maxlength="2048" type="number" class="form-control" placeholder="3" aria-label="searchItem"
                               v-model="subscriptionLength">
                    </b-col>
                </b-row>
            </b-col>
            <b-col no-gutters cols="2" align-self="stretch">
                <b-button class="full-width full-height" :disabled="isValidToSend" @click="submitSubscription" type="submit" variant="primary">Submit Subscription</b-button>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  export default {
    name: "SubscriptionSettings",

    data(){
      return{
        userEmail: "",
        pricePointType: "",
        pricePointTypes: [
          "Dollar Amount",
          "Percentage Of Market Average"
        ],
        pricePointValue: "",
        subscriptionLength: "3"
      }
    },

    computed:{
      ...mapGetters([
        "getCurrentSearch"
      ]),
      isValidToSend(){
        if(this.getCurrentSearch.length > 0)
          return false
        return true
      }
    },

    methods: {
      ...mapActions([
        "sendSubscription"
      ]),
      submitSubscription(){
        this.sendSubscription(this.userEmail, this.pricePointType, this.pricePointValue, this.subscriptionLength)
      }
    }
  }
</script>

<style scoped>

    .full-width{
        width:100%;
        padding-left:0px;
        padding-right:0px;
        margin-left:0px;
        margin-right:0px;
    }

    .full-height{
        height:100%;
        padding-top:0px;
        padding-bottom:0px;
        margin-top:0px;
        margin-bottom:0px;
    }
</style>
