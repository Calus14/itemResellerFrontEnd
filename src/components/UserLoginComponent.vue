<template>
    <v-dialog persistent v-model="isOpen" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
            >
                <v-icon left>mdi-account</v-icon>
                <span v-if="$store.state.currentUserEmailAddress.length==0">
                            Login
                </span>
                <span v-else>
                            Logout
                </span>
            </v-btn>
        </template>
        <v-card v-if="$store.state.currentUserEmailAddress.length==0">
            <v-card-title>
                <span class="headline">User Login</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                    label="Email Address*"
                                    required
                                    v-model="userEmail"
                                    @keypress="validateEmailAddress"
                                    @click="validateEmailAddress"
                                    @change="validateEmailAddress"
                                    :error="validEmailAddress == false"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                    label="Password*"
                                    hint="8-16 characters numbers and letters"
                                    required
                                    :type="'password'"
                                    v-model="userPassword"
                                    @keypress="validatePassword"
                                    @click="validatePassword"
                                    :error="validUserPassword == false"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-btn color="green darken-4"
                       text
                       :disabled="validUserPassword == false || validEmailAddress == false"
                       @click="handleNewUserSubmit">Register
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-4" text @click="isOpen = false">Close</v-btn>
                <v-btn color="blue darken-4"
                       text
                       :disabled="validUserPassword == false || validEmailAddress == false"
                       @click="login">Log in
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else>
            <v-card-title>
                <span class="headline">User Logout</span>
            </v-card-title>
            <v-card-text>
                <p class="text-center text--darken-1"> Confirm Logout?</p>
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue darken-4"
                       text
                       @click="logout">Log out
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>
    import {mapActions} from "vuex";
    import regexCheckers from "../utility/usefulRegex";

    export default {
        name: "UserLoginComponent",

        data() {
            return {
                isOpen: false,
                userEmail: "",
                validEmailAddress: false,
                userPassword: "",
                validUserPassword: false
            }
        },

        methods: {
            ...mapActions([
                "loginUser",
                "checkUsersAlreadyExists",
                "createNewUser"
            ]),

            login(){
              this.loginUser({'email': this.userEmail, 'password': this.userPassword});
              this.isOpen = false

            },

            logout(){
                this.$store.state.currentUserEmailAddress = "";
                this.$store.state.currentUserUUID = "";
                this.$store.state.userSubscriptions = [];
                this.isOpen = false
            },

            validateEmailAddress() {
                if (!regexCheckers.isValidEmailAddress(this.userEmail)) {
                    this.validEmailAddress = false
                } else {
                    this.validEmailAddress = true
                }
            },

            validatePassword() {
                if (!regexCheckers.isValidPassword(this.userPassword)) {
                    this.validUserPassword = false
                } else {
                    this.validUserPassword = true
                }
            },

            checkNewUserValidity() {
                var alertMessage = ""
                // First are they even valid email and password
                if (!this.validEmailAddress)
                    alertMessage = "Invalid email address "
                if (!this.validUserPassword)
                    alertMessage = alertMessage + "\n Invalid password: 7 to 16 characters contain only characters, numeric digits, underscore and first character must be a letter"
                if (!this.validEmailAddress || !this.validUserPassword) {
                    alert(alertMessage)
                    return false
                }
                return true
            },

            handleNewUserSubmit() {
                // Exit when the form isn't valid
                if (!this.checkNewUserValidity()) {
                    console.log("Failed")
                    return
                }

                console.log("sending down new user")
                let newUserObject = {
                    emailAddress: this.userEmail,
                    password: this.userPassword
                }
                this.createNewUser(newUserObject)

                // Hide the modal manually
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-add-word')
                })
            },
        },
    }
</script>

<style scoped>

</style>