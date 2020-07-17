<template>
    <div id="navigationBar">
        <b-container fluid="" class="bv-example-row">
            <b-row class="text-center justify-content-center">
                <b-col cols="1">
                    <router-link to="/"> Home </router-link>
                </b-col>
                <b-col cols="1">
                    <label id="usernameLabel">Email Address:</label>
                </b-col>
                <b-col cols="1">
                    <input  maxlength="100" type="text" class="form-control" placeholder=""
                            v-model="$store.state.attemptedUserEmailAddress"
                            >
                </b-col>
                <b-col cols="1">
                    <label id="passwordLabel">Password:</label>
                </b-col>
                <b-col cols="1">
                    <input  maxlength="100" type="password" class="form-control" placeholder="" aria-label="searchItem"
                            v-model="password"
                    >
                </b-col>
                <b-col cols="1">
                    <b-button  @click="loginUser(password)" type="submit" variant="primary">Login</b-button>
                </b-col>
                <b-col cols="1">
                    <b-button style="float: right" v-b-modal.modalCreateAccount variant="success">Create Account</b-button>
                    <b-modal
                            id="modalCreateAccount"
                            ref="createNewAccount"
                            title="Create New Account"
                            @show="resetUserModal"
                            @hidden="resetUserModal"
                            @ok="handleOk"
                    >
                        <form ref="createNewAccountForm" @submit.stop.prevent="handleNewUserSubmit">
                            <b-form-group :state="validNewEmailAddress"
                                          label="Email Address"
                                          label-for="newUserEmailInput"
                                          invalid-feedback="Email Address must be a valid email address"
                            >
                                <b-form-input id="newUserEmailInput" type="text"
                                              maxlength="100"
                                              @keyup="validateEmailAddress"
                                              v-model="newUserEmail"
                                              :state="validNewEmailAddress"
                                              required
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group :state="validNewUserPassword"
                                          label="Password"
                                          label-for="newUserPassword"
                                          invalid-feedback="7 to 16 characters contain only characters, numeric digits, underscore and first character must be a lette"
                            >
                                <b-form-input type="password"
                                              minLength="8"
                                              maxlength="16"
                                              id="newUserPassword"
                                              @keyup="validatePassword"
                                              v-model="newUserPassword"
                                              :state="validNewUserPassword"
                                              required
                                ></b-form-input>
                            </b-form-group>
                        </form>
                    </b-modal>
                </b-col>
                <b-col cols="1">
                    <label id="currentUser">
                        {{$store.state.currentUserEmailAddress}}
                    </label>
                </b-col>
                <b-col cols = 1>
                    <router-link style="white-space:nowrap;" to="/searchTheInternet"> Search </router-link>
                </b-col>
                <b-col cols = 1>
                    <router-link style="white-space:nowrap;" to="/subsrcriptions"> Manage Subscriptions </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import regexCheckers from "../utility/usefulRegex"

    import {mapActions} from "vuex";

  export default {

    name: "NavigationBar",

    data(){
      return{
        password: "",

        newUserEmail: "",
        validNewEmailAddress: false,
        newUserPassword: "",
        validNewUserPassword: false
      }
    },

    methods:{
      ...mapActions([
        "loginUser",
        "checkUsersAlreadyExists",
        "createNewUser"
      ]),

      resetUserModal(){
        this.newUserEmail = ""
        this.validNewEmailAddress = false
        this.newUserPassword = ""
        this.validNewUserPassword = false
      },

      // Generic solution for all bootstrap vue modals
      handleOk(bvModalEvt){
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleNewUserSubmit()
      },

      validateEmailAddress(){
        if( !regexCheckers.isValidEmailAddress(this.newUserEmail) ){
          this.validNewEmailAddress = false
        }
        else{
          this.validNewEmailAddress = true
        }
      },

      validatePassword(){
        if( !regexCheckers.isValidPassword(this.newUserPassword)){
          this.validNewUserPassword = false
        }
        else{
          this.validNewUserPassword = true
        }
      },

      checkNewUserValidity(){
        var alertMessage = ""
        // First are they even valid email and password
        if( !this.validNewEmailAddress )
          alertMessage = "Invalid email address "
        if( !this.validNewUserPassword )
          alertMessage = alertMessage + "\n Invalid password: 7 to 16 characters contain only characters, numeric digits, underscore and first character must be a letter"

        if(!this.validNewEmailAddress || !this.validNewUserPassword){
          alert(alertMessage)
          return false
        }
      },

      handleNewUserSubmit(){
        // Exit when the form isn't valid
        if (!this.checkNewUserValidity()) {
          console.log("Failed")
          return
        }

        console.log("sending down new user")
        let newUserObject = {
          emailAddress : this.newUserEmail,
          password : this.newUserPassword
        }
        this.createNewUser(newUserObject)

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-add-word')
        })
      },

      displaySubscriptions(){

      }
    }
  }
</script>

<style scoped>
    #navigationBar{
        border-bottom : 2px;
        border-top: 0px;
        border-right: 0px;
        border-left: 0px;
        border-style: solid;
        background-color: lightgray;
    }

</style>
