<template>
    <div class="text--center">
        <h3>Subscribe To Auto Find Deals You Want</h3>
        <v-card class="ma-10" >
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-radio-group v-model="pricePoint">
                                <v-row>
                                    <v-radio
                                            value="Dollar"
                                            label="At or Below Specific Dollar Level"
                                    >
                                    </v-radio>
                                    <v-spacer/>
                                    <p class="body-1">$</p>
                                    <v-text-field
                                            :disabled="pricePoint != 'Dollar'"
                                            outlined
                                            value="50"
                                            type="number"
                                            v-model="dollarValue"
                                            min="1"
                                    />
                                </v-row>
                                <v-row>
                                    <v-radio
                                            value="Percent"
                                            label="At or Below Specific Percent Of Average Market Value"
                                    >
                                    </v-radio>
                                    <v-spacer/>
                                    <v-text-field
                                            :disabled="pricePoint != 'Percent'"
                                            v-model="percentValue"
                                            value="90"
                                            type="number"
                                            outlined
                                            min="1"
                                            max="100"
                                    />
                                    <p class="body-1">%</p>
                                </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-radio-group v-model="websiteSelection">
                        <v-row>
                            <v-col cols="6">
                                <v-radio
                                        value="all"
                                        label="Check All Websites"
                                        @change="changeWebsites">
                                </v-radio>
                            </v-col>
                            <v-col cols="6">
                                <v-radio
                                        value="selected"
                                        label="Check only searched Websites"
                                        @change="changeWebsites">
                                </v-radio>
                            </v-col>
                        </v-row>
                    </v-radio-group>
                    <v-row>
                        <v-checkbox
                                v-model="emailNotifications"
                                label="Notify by email when items found"
                        >
                        </v-checkbox>
                    </v-row>
                    <v-row>
                        <v-col cols="9">
                            <p class="body-1">Days Subscription will last</p>
                            <v-text-field
                                    v-model="subscriptionLength"
                                    value="1"
                                    outlined
                                    type="number"
                                    min="1"
                                    max="100"
                            />
                        </v-col>
                        <v-col cols = "3">
                            <v-spacer></v-spacer>
                            <v-btn color="blue" @click="submitSubscription">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "SubscriptionSettings",

        data() {
            return {
                pricePoint: 'Dollar',
                dollarValue: '',
                percentValue: '',
                websiteSelection: 'all',
                emailNotifications: false,
                subscriptionLength: 3
            }
        },

        methods: {
            ...mapActions([
                "sendSubscription"
            ]),

            changeWebsites() {
                this.allWebsites = !this.allWebsites
            },

            submitSubscription() {
                var pricePointValue = 0
                console.log(pricePointValue)
                this.pricePoint == "Dollar" ? pricePointValue = this.dollarValue : pricePointValue = this.percentValue
                console.log(pricePointValue)
                let subscriptionObject = {
                    type: this.pricePoint,
                    value: pricePointValue,
                    subDays: this.subscriptionLength
                }

                this.sendSubscription(subscriptionObject)
            }
        }
    }
</script>

<style scoped>

    .full-width {
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }

    .full-height {
        height: 100%;
        padding-top: 0px;
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
</style>
