<template>
    <div class="subscription_settings">
        <div id="sub_options">
            <div id="email_div">
                <div id="email_label">
                    <h6 style="font-weight:bold">Email Address</h6>
                </div>
                <div id="email_input">
                    <input maxlength="2048" type="text" class="form-control" placeholder="your@gmail.com" aria-label="searchItem"
                           v-model="userEmail">
                </div>
            </div>
            <div id="price_point_div">
                <div id="type_selector">
                    <b-form-select v-model="pricePointType" :options="pricePointTypes"></b-form-select>
                </div>
                <div id="price_value_input">
                    <input maxlength="2048" type="number" class="form-control" placeholder="100" aria-label="searchItem"
                           v-model="pricePointValue">
                </div>
            </div>
        </div>
        <div id="submit_subscription_div">
            <b-button :disabled="isValidToSend" @click="submitSubscription" type="submit" variant="primary">Submit Subscription</b-button>
        </div>
    </div>

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
        pricePointValue: ""
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
        this.sendSubscription(this.userEmail, this.pricePointType, this.pricePointValue)
      }
    }
  }
</script>

<style scoped>

    #sub_options{
        width:80%;
        display: inline-block;
    }
    #submit_subscription_div{
        display: inline-block;
    }

    #email_div{
        width:100%;
    }
    #price_point_div {
        width: 100%;
    }
    #email_label{
        width: 20%;
        display: inline-block;
    }
    #email_input{
        width:80%;
        display: inline-block;
    }
    #type_selector{
        width:50%;
        display: inline-block;
    }
    #price_value_input{
        width:50%;
        display: inline-block;
    }

    .subscription_settings{
        width: 50%;
        padding: 10px 50px 10px;
        margin: 0 auto;
    }
</style>
