<template>
  <div>
    <!--    credits to the net ninja's tutorial! https://youtu.be/l3BfJ_QI9nI-->
    <v-layout row style="padding-top: 10px">
      <v-btn
          color="#EDE7F6" large
          @click="sortThis('week')"
      >
        <v-icon large left>
          mdi-calendar
        </v-icon>
        <span class="v-size--large caption">Sort By Week</span>
      </v-btn>


      <v-btn
          color="#EDE7F6" large
          style="margin-left: 10px"
          @click="sortThis('name')"
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
import {sortCurriculum} from "@/components/curriculum/CurriculumData";

export default {
  created() {
  },
  name: "Sorter",
  methods: {
    //<!--    credits to the net ninja's tutorial! https://youtu.be/l3BfJ_QI9nI-->
    sortThis(prop) {
      sortCurriculum(prop)
    }
  },

}


</script>

<style scoped>

</style>