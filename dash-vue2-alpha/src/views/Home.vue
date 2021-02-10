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

    <!--    nav  -->
    <v-row style="padding-top: 20px">
      <v-col cols="9" style="padding-left: 30px">
        <AddCurriculum v-if="show_curriculum"></AddCurriculum>
      </v-col>
      <v-col cols="3">
        <v-row>
          <p style="padding-right: 20px; margin-top: 20px; padding-top: 15px; color: white"
          >Change View</p>
          <v-switch
              v-model="show_curriculum"
              color="white"
              inset
              style="padding-top: 20px"
          ></v-switch>
        </v-row> <!--    Switch   -->
      </v-col>
    </v-row>

    <CurriculumMain v-if="show_curriculum"></CurriculumMain>
    <OutreachMain v-else></OutreachMain>


  </v-container>
</template>

<script>
// @ is an alias to /src


import {myProjectAuth} from "@/backend/backend";
import CurriculumMain from "@/components/curriculum/CurriculumMain";
import OutreachMain from "@/components/outreach/OutreachMain";
import AddCurriculum from "@/components/curriculum/AddCurriculum";
import {curriculum_details, updateDetails} from "@/components/curriculum/CurriculumData";

export default {
  name: 'Home',
  components: {
    OutreachMain,
    CurriculumMain,
    AddCurriculum,
  },

  data() {
    return {
      USER: myProjectAuth.currentUser,
      show_curriculum: true,
      temp_add_curriculum: null,
    }
  },
  methods:{

  }
}
</script>

