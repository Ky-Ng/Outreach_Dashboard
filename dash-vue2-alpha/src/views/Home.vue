<template>
  <v-container>
  <v-card
      class="mx-auto"
      color="red accent-2"
      dark
      max-width="3000"
  >
    <v-card-title>
      <h3>Welcome back {{ USER }}, here is your Serendipity Outreach Dashboard!</h3>
    </v-card-title>
  </v-card> <!-- Welcome Message -->

    <v-card
        class="my-3"
        elevation="2"
        color="pink lighten-5"
        v-for="(curriculum, i) in curriculum_components"
        :key="i"
    >
    <v-card-title>

      <h3>Week {{ curriculum.week }}: {{ curriculum.name }}</h3>
      <v-col></v-col>
      <h4 class="font-italic">{{ curriculum.topic }}</h4>

    </v-card-title>
    </v-card>

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
      curriculum_components: [
        {
          week: 1,
          name: 'Lemonade Stand',
          topic: "Fundamental Movement"
        },
        {
          week: 2,
          name: 'Save the Lemonade',
          topic: "Fundamental Movement"
        },
      ]
  }
}}
</script>

