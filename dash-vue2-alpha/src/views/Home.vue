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
    <CurriculumMain></CurriculumMain>
  </v-container>
</template>

<script>
// @ is an alias to /src


import {myProjectAuth} from "@/backend/backend";
import CurriculumMain from "@/components/curriculum/CurriculumMain";

export default {
  name: 'Home',
  components: {
    CurriculumMain,
  },
  data() {
    return {
      USER: myProjectAuth.currentUser.displayName,

    }
  }
}
</script>

