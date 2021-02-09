<template>
  <v-container>
    <CurriculumContent :incoming_curriculum="incoming_curriculum"></CurriculumContent>
    <p v-if="incoming_curriculum != null">{{incoming_curriculum.week}}</p>
  </v-container>
</template>

<script>
import CurriculumContent from "@/components/curriculum/CurriculumContent";

export default {
  name: "CurriculumMain",
  props: [
      "incoming_curriculum"
  ],
  components: {
    CurriculumContent,
  }
}
</script>

<style scoped>

</style>