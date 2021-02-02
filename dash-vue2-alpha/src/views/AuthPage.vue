<template>
  <div>
    <p>Please Authenticate</p>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui"
import firebase from "firebase";
export default {
  name: "auth",
  mounted(){ //when it is mounted
    var uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions:[
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    };
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
