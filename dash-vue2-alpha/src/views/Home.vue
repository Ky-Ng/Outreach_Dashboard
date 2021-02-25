<template>
  <v-container>
    <Header :user=USER></Header>
    <CurriculumMain></CurriculumMain>
  </v-container>
</template>

<script>
import {myProjectAuth} from "@/backend/backend";
import CurriculumMain from "@/components/curriculum/CurriculumMain";
import OutreachMain from "@/components/outreach/OutreachMain";
import AddCurriculum from "@/components/curriculum/AddCurriculum";
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
  methods: {}
}
</script>

