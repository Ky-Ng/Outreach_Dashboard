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
  </v-container>
</template>

<script>
import {curriculum_details} from "@/components/curriculum/CurriculumData";

export default {
  name: "CurriculumContent",
  data() {
    return {
      curriculum_details,
    }
  },
}
</script>

