<template>
  <v-container>
    <p>
      Test page
    </p>
    <EditCurriculum :curriculum_detail="{

        week: 1,
        name: 'Lemonade Stand',


        student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
        teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
        documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'

    }">
    </EditCurriculum>
    }
    <p style="color: white"
    >{{curriculum_details}}</p>



  </v-container>
</template>

<script>
import AddCurriculum from "@/components/curriculum/AddCurriculum.vue";
import {exploration_curriculum} from "@/components/curriculum/CurriculumData";
import EditCurriculum from "@/components/curriculum/EditCurriculum";

export default {
  name: "Test",
  components:{
    AddCurriculum,
    EditCurriculum,
  },
  data() {
    return {
      curriculum_details: exploration_curriculum
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