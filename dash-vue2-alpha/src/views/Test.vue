<template>
  <v-container>
    <p>
      Test page
    </p>
    <AddCurriculum @Changes="testing"></AddCurriculum>



  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";

export default {
  name: "Test",
  components:{
    AddCurriculum,
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