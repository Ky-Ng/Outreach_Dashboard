<template>
  <v-row style="padding-top: 20px">
    <v-col cols="4" style="padding-left: 30px">
      <v-row>
        <p style="padding-right: 20px; margin-top: 20px; padding-top: 15px; color: white">Switch Curriculum</p>
        <v-switch
            v-model="show_exploration"
            color="white"
            inset
            style="padding-top: 20px"
            @click="emitShowFundamentals"
        ></v-switch>
      </v-row> <!--    Switch   -->
    </v-col>
    <v-col cols="6" style="margin-top: 15px; margin-left: 40px">
      <Sorter></Sorter>
    </v-col>
    <v-col cols="1">
      <AddCurriculum></AddCurriculum>
    </v-col>
  </v-row>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum";
import Sorter from "@/components/general/Sorter";

export default {
  name: "CurriculumNav",
  components: {
    Sorter,
    AddCurriculum
  },
  data() {
    return {
      show_exploration: true,
    }
  },
  methods: {
    emitShowFundamentals() {
      this.$emit("show_exploration", this.show_exploration)
    }
  }
}
</script>

<style scoped>

</style>