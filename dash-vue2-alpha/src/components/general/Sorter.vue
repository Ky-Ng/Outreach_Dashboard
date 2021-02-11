<template>
  <div>
<!--    credits to the net ninja's tutorial! https://youtu.be/l3BfJ_QI9nI-->
    <v-layout row style="padding-top: 10px">
      <v-btn
          color="#EDE7F6" large
          @click="sortBy('week')"
      >
        <v-icon large left>
          mdi-calendar
        </v-icon>
        <span class="v-size--large caption">Sort By Week</span>
      </v-btn>




      <v-btn
          color="#EDE7F6" large
          @click="sortBy('name')"
          style="margin-left: 10px"
      >
        <v-icon large left>
          mdi-sort-alphabetical-variant
        </v-icon>
        <span class="v-size--large caption">Sort By Name</span>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import {curriculum_details} from "@/components/curriculum/CurriculumData";

export default {
  name: "Sorter",
  methods:{
    //<!--    credits to the net ninja's tutorial! https://youtu.be/l3BfJ_QI9nI-->
    sortBy(prop) {
      curriculum_details.sort((a,b) => a[prop] < b[prop] ? -1:1)
    }
  },
  mounted() {
    this.sortBy('week')
  }
}

</script>

<style scoped>

</style>