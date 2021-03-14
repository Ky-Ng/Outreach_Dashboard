<template>
  <v-container>
    <v-btn
        @click="testing"
    >Test Cloud Function
    </v-btn>

    <v-btn
        @click="getAuthStatus"
    >
      Get Auth Status
    </v-btn>
  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";
import {curriculum_details} from "@/components/curriculum/CurriculumData";
import EditCurriculum from "@/components/curriculum/EditCurriculum";
import firebase from "firebase";
import {addAdminRole} from "../../functions";
import {myProjectAuth} from "@/backend/backend";

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
    },
    getAuthStatus(){
      // console.log(myProjectAuth.currentUser)
    }
  }
}
</script>

<style scoped>

</style>