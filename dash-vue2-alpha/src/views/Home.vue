<template>
  <v-container>
    <Header></Header>
    <TeachingMain></TeachingMain>
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
import TeachingMain from "@/components/teaching_resources/TeachingMain";

export default {
  name: 'Home',
  components: {
    Header,
    CurriculumMain,
    TeachingMain
  },

  data() {
    return {
      show_curriculum: true,
      temp_add_curriculum: null,
    }
  },
  methods: {}
}
</script>

