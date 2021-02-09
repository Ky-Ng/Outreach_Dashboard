<template>
  <v-container>
    <v-card
        class="mx-auto"
        color="red accent-2"
        dark
        max-width="3000"
        src="@/assets/FullLOGO.png"
    >
      <v-img
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          max-height="200"
          src="@/assets/CropLOGO.png"
      ></v-img>
      <v-card-title>
        <h3>Welcome Back {{ USER.displayName }}</h3>
      </v-card-title>
    </v-card> <!-- Header -->

    <v-row>
      <p style="padding-right: 20px; margin-top: 20px"
      >Change View</p>
      <v-switch
          v-model="show_curriculum"
          color="teal accent-2"
          inset
      ></v-switch>
    </v-row> <!--    Switch   -->

    <CurriculumMain v-if="show_curriculum"></CurriculumMain>



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
      USER: myProjectAuth.currentUser,
      show_curriculum: true,
    }
  }
}
</script>

