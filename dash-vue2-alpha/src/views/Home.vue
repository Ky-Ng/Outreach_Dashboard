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

    <v-card
        class="my-3"
        elevation="2"
        color="pink lighten-5"
        v-for="(curriculum, i) in curriculum_components"
        :key="i"
    >
    <v-card-title>
      <h3>
        {{ curriculum.name }}
      </h3>
<!--      <h3>Week {{ // curriculum_component. }}</h3>-->
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
          week: 0,
          name: 'Lemonade stand'
        },
        {
          week: 1,
          name: 'Save the Lemonade'
        },
      ]
  }
}}
</script>

