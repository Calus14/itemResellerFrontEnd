<template>
    <div class="mb-5 pr-0">
        <v-app-bar
                class="mr-0 pr-0"
                color="light-blue accent-4"
                dark>
            <v-toolbar-title class="mr-2">Alpha Build</v-toolbar-title>
            <v-toolbar-items>
                <v-btn to="/">
                    <v-icon left>mdi-home</v-icon>
                    Home
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <h4 class="title pa-2 text-center">{{$store.state.currentUserEmailAddress}}</h4>

                <UserLoginComponent/>

                <v-btn to="/searchTheInternet">
                    <v-icon left>mdi-magnify</v-icon>
                    Search For Items
                </v-btn>

                <v-btn to="/subsrcriptions">
                    <v-icon left>mdi-magnify</v-icon>
                    Manage Subscriptions
                </v-btn>

            </v-toolbar-items>

        </v-app-bar>
    </div>
</template>

<script>
    import UserLoginComponent from "./UserLoginComponent";

    export default {


        name: "NavigationBar",
        components: {
            UserLoginComponent,
        },

        data() {
            return {
            }
        },

        methods: {
        },
    }
</script>

<style scoped>

</style>
