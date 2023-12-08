<template>
  <div>
    <!--    The google Authentication Card -->
    <v-card class="mx-auto my-3" max-width="900">
      <v-img class="white--text align-end" src="../assets/FullLOGO.png">
        <v-card-title>Community Outreach Reengineered</v-card-title>
      </v-img>

      <v-card-text class="text--primary text-center text-h6">
        Join Serendipity in our quest to build a community through STEM
      </v-card-text>
      <v-card-subtitle class="pb-2" v-if="isSafari">
        Please view this app on a non-Safari Browser.
      </v-card-subtitle>
      <div class="pb-2" id="firebaseui-auth-container" v-if="!isSafari"></div>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { user } from "@/backend/backend";
import router from "@/router/router";

export default {
  name: "auth",
  data() {
    return {
      isSafari: false,
    };
  },
  mounted() {
    // regex for if the browser is safari or not
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    var uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>
