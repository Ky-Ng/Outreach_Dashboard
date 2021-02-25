<template>
  <v-container>
   <Header :user=USER></Header>

    <!--    nav  -->
    <v-row style="padding-top: 20px">
      <v-col cols="5" style="padding-left: 30px">
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
<!--      margin-left: 70px;-->
      <v-col cols="10" style="margin-top: 15px; margin-left: 40px">
        <Sorter></Sorter>
      </v-col>
      <v-col cols="1">
        <AddCurriculum v-if="show_curriculum"></AddCurriculum>
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
import {curriculum_details, addDetails} from "@/components/curriculum/CurriculumData";
import Sorter from "@/components/general/Sorter";
import Header from "@/components/general/Header";

export default {
  name: 'Home',
  components: {
    Header,
    OutreachMain,
    CurriculumMain,
    Sorter,
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

