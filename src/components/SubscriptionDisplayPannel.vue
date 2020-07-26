<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <v-row>
                <span>
                    {{subscriptionItemName}} for {{subscriptionPricePointString}}
                </span>
                <v-spacer/>
                <span>
                    Expires {{subscriptionExpirationDate}}
                </span>
            </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content
            v-for="item in subscriptionFoundItems"
            :key="item">
            <v-row>
                <v-img
                    :src="item.itemImg"
                    >


                </v-img>
                <v-spacer/>
                <a href="item.itemLink">Click here to View The Item</a>
                <v-spacer/>
                <span>
                    {{item.itemPriceString}}
                </span>
            </v-row>

        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "SubscriptionDisplayPannel",

        props: {
            subscriptionItemName : String,
            subscriptionCreationDate : String,
            subscriptionExpirationDate: String,
            subscriptionPricePointString: String,
            subscriptionFoundItems: Array,
        }
    }
</script>

<style scoped>

</style>