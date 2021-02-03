<template>
  <v-container>
  <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="3000"
  >
    <v-card-title>
      <h3>Welcome back {{ USER }}. Here is your Serendipity Outreach Dashboard!</h3>
    </v-card-title>
  </v-card> <!-- Welcome Message -->
  </v-container>
</template>

<script>
// @ is an alias to /src


import {myProjectAuth} from "@/backend/backend";

export default {
  name: 'Home',
  components: {
  },
  data (){
    return{
      USER: myProjectAuth.currentUser.displayName,
  }
}
</script>
