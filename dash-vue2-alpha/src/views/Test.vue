<template>
  <v-container>
    <v-btn
        @click="testing"
    >Test Cloud Function
    </v-btn>
  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";
import {curriculum_details} from "@/components/curriculum/CurriculumData";
import EditCurriculum from "@/components/curriculum/EditCurriculum";
import firebase from "firebase";
import {addAdminRole} from "../../functions";

export default {
  name: "Test",
  components: {
    AddCurriculum,
    EditCurriculum,
  },
  data() {
    return {
      curriculum_details,
      my_functions: firebase.functions()
    }
  },
  methods: {
    testing() {
      console.log("working")
      const addAdminRole = firebase.functions().httpsCallable("addAdminRole")
      addAdminRole({email: "serendipitystem@gmail.com"}).then(result =>{
        console.log(result)
      })
    }
  }
}
</script>

<style scoped>

</style>