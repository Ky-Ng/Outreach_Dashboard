<template>
  <v-container>
    <p>
      Test page
    </p>
<!--    <AddCurriculum></AddCurriculum>-->
    <p style="color: white"
    >{{curriculum_details}}</p>



  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";
import {curriculum_details} from "@/components/curriculum/CurriculumData";

export default {
  name: "Test",
  components:{
    AddCurriculum,
  },
  data() {
    return {
      curriculum_details
    }
  },
  methods:{
    testing(){
      console.log("working")
    }
  }
}
</script>

<style scoped>

</style>