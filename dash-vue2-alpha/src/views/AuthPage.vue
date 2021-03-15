<template>
  <div>
<!--    The google Authentication Card -->
    <v-card
        class="mx-auto my-3"
        max-width="900"
    >
      <v-img
          class="white--text align-end"
          height="400px"
          src="../assets/FullLOGO.png"
      >
        <v-card-title>Community Outreach Reengineered</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">

      </v-card-subtitle>

      <v-card-text class="text--primary">
        Sign in to be a part of our warm and welcoming STEM community, get access to our premium STEM curriculum, and so much more.
      </v-card-text>
      <div id="firebaseui-auth-container"></div>
      <v-card-actions>
        <v-btn
            color="red"
            text
        >

        </v-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import firebase from "firebase";
import * as firebaseui from "firebaseui";
import {user} from "@/backend/backend";
import router from "@/router/router";

export default {
  name: "auth",
  mounted(){ //when it is mounted
    var uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions:[
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
