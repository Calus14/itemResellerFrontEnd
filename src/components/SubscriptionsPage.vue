<template>
    <div class="text-xs-center">
        <img src="/assets/gifs/fun1.gif">
            <v-layout justify-center>
                <v-card outlined
                        elevation="2"
                        min-width="800"
                    class = "my-10">
                    <v-card-title>
                        <span class="headline">Subscription Search</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" class="px-10">

                                <v-text-field
                                        class="align-right"
                                        label=""
                                        background-color="light-gray"
                                        outlined
                                        append-icon="mdi-magnify"
                                        v-model="subscriptionNameFilter"
                                        >

                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-layout>
            <v-layout justify-center>
                <v-card
                        outlined
                        elevation="2"
                        min-width="800"
                        class = "mb-10">
                    <v-card-title>
                        <span class="headline">Active Subscriptions</span>
                    </v-card-title>
                    <v-expansion-panels popout>
                        <v-card-text
                            v-for="subscription in displayedUserSubscriptions" :key="subscription.id">
                            <SubscriptionDisplayPanel
                                :subscriptionItemName="subscription.itemName"
                                :subscriptionCreationDate="subscription.creationTime"
                                :subscriptionExpirationDate="subscription.expirationTime"
                                :subscriptionPricePointString="parseFloat(subscription.pricePoint).toFixed(2)+(subscription.priceType == 'Dollar' ? '$' : '%')"
                                :subscriptionId="subscription.subscriptionId"
                                ></SubscriptionDisplayPanel>
                        </v-card-text>
                    </v-expansion-panels>
                </v-card>
            </v-layout>
    </div>
</template>

<script>
    import SubscriptionDisplayPanel from "./SubscriptionDisplayPanel";
    import {mapActions} from "vuex";

    export default {
        name: "SubscriptionsPage",

        components: {
            // eslint-disable-next-line vue/no-unused-components
            SubscriptionDisplayPanel,
        },

        data() {
            return {
                subscriptionNameFilter: "",
            }
        },

        computed: {
            displayedUserSubscriptions: function(){
                if( this.subscriptionNameFilter.length == 0 )
                    return this.$store.state.userSubscriptions;
                else{
                    var filteredSubscriptions = []
                    for( var subscription in this.$store.state.userSubscriptions ){
                        if( subscription.itemName.includes(this.subscriptionNameFilter) ){
                            filteredSubscriptions.push(subscription)
                        }
                    }
                    return filteredSubscriptions
                }
            }
        },

        methods: {
            ...mapActions([
                "getUsersActiveSubscriptions",
            ]),
        },

        // Creates the random gif cause im bored
        beforeMount: function () {
            if(this.$store.state.currentUserUUID.length == 0)
                return

            this.getUsersActiveSubscriptions()
        },
    }
</script>

<style scoped>

</style>
