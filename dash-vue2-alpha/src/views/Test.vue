<template>
  <v-container>
    <v-btn @click="testing">
      Test me
    </v-btn>
    <MakeAdminForm></MakeAdminForm>
  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";
import {exploration_curriculum} from "@/components/curriculum/CurriculumData";
import EditCurriculum from "@/components/curriculum/EditCurriculum";
import {isAdmin, user} from "@/backend/backend";
import MakeAdminForm from "@/components/admin/MakeAdminForm";

export default {
  name: "Test",
  components:{
    AddCurriculum,
    EditCurriculum,
    MakeAdminForm,
  },
  data() {
    return {
      curriculum_details: exploration_curriculum
    }
  },
  methods:{
    testing(){
      console.log("working")
      console.log("the user is")
      console.log(user)
      console.log("is Admin: ")
      console.log(isAdmin)
    }
  }
}
</script>

<style scoped>

</style>