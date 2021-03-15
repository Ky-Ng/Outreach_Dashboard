<template>
  <v-container>

<v-btn @click="logData">Sign Out</v-btn>
    <v-expansion-panels
        v-for="(curriculum, i) in target_curriculum_array"
        :key="i"
        class="my-3"
        color="pink lighten-5"
        elevation="2"
    >
      <v-expansion-panel v-if="curriculum.show">
        <v-expansion-panel-header>
          <v-col cols="11">
            <h2>Week {{ curriculum.week }}: {{ curriculum.name }}</h2>
          </v-col>
          <v-col v-if="isAdmin" cols="1">
            <EditCurriculum :curriculum_detail="curriculum"></EditCurriculum>
          </v-col>
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
import {exploration_curriculum, sortCurriculum} from "@/components/curriculum/CurriculumData";
import {user, getCollection, myProjectAuth, isAdmin} from "@/backend/backend";
import EditCurriculum from "@/components/curriculum/EditCurriculum";
import router from "@/router/router";

export default {
  name: "CurriculumContent",
  components: {
    EditCurriculum
  },
  props: {
    curriculum_collection: String,
    target_curriculum_array: Array,
  },

  data() {
    return {
      isAdmin
    }
  },
  methods: {
    logData(data){
      console.log("from downatoan " + isAdmin)
      myProjectAuth.signOut()
      router.push({name: "login"})
      router.go(0) // reload the page in order to get the google sign in UI Back
    }
  },

  mounted() {
    getCollection(this.curriculum_collection, this.target_curriculum_array)
  },

  beforeUpdate() {
    sortCurriculum("week")
  }
}
</script>

