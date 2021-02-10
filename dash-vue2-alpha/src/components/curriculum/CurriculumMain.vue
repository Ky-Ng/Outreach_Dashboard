<template>
  <v-container>
    <CurriculumContent></CurriculumContent>

  </v-container>
</template>

<script>
import CurriculumContent from "@/components/curriculum/CurriculumContent";

export default {
  name: "CurriculumMain",
  // props: [
  //     "incoming_curriculum"
  // ],
  components: {
    CurriculumContent,
  }
}
</script>

<style scoped>

</style>