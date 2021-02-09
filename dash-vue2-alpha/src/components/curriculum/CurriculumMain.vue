<template>
  <v-container>

    <CurriculumContent></CurriculumContent>
  </v-container>
</template>

<script>
import CurriculumContent from "@/components/curriculum/CurriculumContent";
import AddCurriculum from "@/components/curriculum/AddCurriculum";

export default {
  name: "CurriculumMain",
  components: {
    CurriculumContent,

  }
}
</script>

<style scoped>

</style>