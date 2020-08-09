<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            <v-row>

                <span>
                    {{subscriptionItemName}} for {{subscriptionPricePointString}}
                </span>

                <v-spacer/>
                    <span class = "mr-4">
                        Expires {{subscriptionExpirationDate}}
                    </span>
                    <v-btn class="mr-8"
                            align="right"
                            color="red"
                            depressed
                            @click="deleteUserSubscription({subscriptionId: subscriptionId, itemName:subscriptionItemName})"
                    >
                    <v-icon left>mdi-delete</v-icon>
                    Delete
                    </v-btn>

            </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content
            v-for="item in subscriptionFoundItems"
            :key="item.itemLink">
            <v-row align = "center">
                <span v-html="item.itemImg"/>
                <v-spacer/>
                <span class="text">
                    {{item.itemName}}
                </span>
                <v-spacer/>
                <a class="title align-center" :href="item.itemLink" target="_blank">Click here to purchase the item</a>
                <v-spacer/>
                <span class = "text">
                    ${{item.itemPrice}}
                </span>
            </v-row>

        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "SubscriptionDisplayPannel",

        props: {
            subscriptionItemName : String,
            subscriptionCreationDate : String,
            subscriptionExpirationDate: String,
            subscriptionPricePointString: String,
            subscriptionId: String,
        },

        methods: {
            ...mapActions([
                "getFoundSubscriptionItemsAsync",
                "deleteUserSubscription"
            ]),
        },

        asyncComputed: {
            subscriptionFoundItems: async function() {
                var items = await this.getFoundSubscriptionItemsAsync(this.subscriptionId)
                return items
            }
        }
    }
</script>

<style scoped>

</style>