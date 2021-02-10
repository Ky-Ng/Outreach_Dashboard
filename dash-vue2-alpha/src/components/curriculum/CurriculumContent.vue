<template>
  <v-container>


    <v-expansion-panels
        v-for="(curriculum, i) in curriculum_details"
        :key="i"
        class="my-3"
        color="pink lighten-5"
        elevation="2"
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2>Week {{ curriculum.week }}: {{ curriculum.name }}</h2>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-list-item :href="curriculum.documentation" target="_blank">Documentation: {{
              curriculum.name
            }}
          </v-list-item>
          <v-list-item :href="curriculum.student_link" target="_blank">Student Project: {{
              curriculum.name
            }}
          </v-list-item>
          <v-list-item :href="curriculum.teacher_link" target="_blank">Teacher Project: {{
              curriculum.name
            }}
          </v-list-item>
        </v-expansion-panel-content>

      </v-expansion-panel>
    </v-expansion-panels>
    <!--    just a watcher  -->
<!--    <div v-if="incoming_curriculum != null">-->
<!--      <p @change="updateCurriculumToRender">-->
<!--        {{ incoming_curriculum.documentation }}-->
<!--      </p>-->
<!--    </div>-->
  </v-container>
</template>

<script>
import {curriculum_details} from "@/components/curriculum/CurriculumData";

export default {
  name: "CurriculumContent",
  // props: {
  //   incoming_curriculum: Object,
  //
  // },
  data() {
    return {
      curriculum_details,
    }
  },
  beforeUpdate() {
    // this.curriculum_components = curriculum_details
  },
  methods: {
    updateCurriculumToRender() {
      // this.curriculum_components.append(this.incoming_curriculum)
      // console.log("the curriculum component updated is now")
      // console.log(this.curriculum_components)
      // alert("logging the appended component now!")
    }
  }
}
</script>

<style scoped>
/*.details {*/
/*  margin-left: 20px;*/
/*  text-align: left;*/
/*  word-wrap: break-word;*/
/*}*/
</style>