<template>
  <div>
    <v-btn
        class="mx-2"
        color="cyan"
        dark
        fab
        large
        @click="show = true"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-dialog
        v-model="show"
        persistent>
      <v-card>
        <!--    used from documentation on vuetify js https://vuetifyjs.com/en/components/dialogs/#without-activator-->
        <v-card-title>
          <span class="headline">Add Curriculum</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-row>
                <v-col cols="9">
                  <v-text-field
                      v-model="curriculum_details.name"
                      label="Curriculum Name*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      v-model="curriculum_details.week"
                      label="Week*"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>


              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_details.documentation"
                    label="Documentation*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_details.teacher_link"
                    label="Teacher Project*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_details.student_link"
                    label="Student Project*"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="show = false"
          >
            Cancel
          </v-btn>
          <v-dialog
              max-width="345"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color="primary"
                  dark
                  @click="addCurriculum"
              >
                Save
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="">
                Please fill out all required fields.
              </v-card-title>

            </v-card>
          </v-dialog>
          <!--          TODO fix uneven curriculum name and week-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import {addDetails} from "@/components/curriculum/CurriculumData";

export default {
  name: "AddCurriculum",
  props: {},

  data() {
    return {
      show: false,
      error: false,
      curriculum_details: {
        week: '',
        name: '',
        student_link: '',
        teacher_link: '',
        documentation: ''
      }
    }
  },
  methods: {
    resetCurriculum(){
      this.curriculum_details.week = ''
      this.curriculum_details.name = ''
      this.curriculum_details.student_link = ''
      this.curriculum_details.teacher_link = ''
      this.curriculum_details.documentation = ''
    },

    addCurriculum() {
      if (this.curriculum_details.week.length > 0 &&
          this.curriculum_details.name.length > 0 &&
          this.curriculum_details.student_link.length > 0 &&
          this.curriculum_details.teacher_link.length > 0 &&
          this.curriculum_details.documentation.length > 0) {

        this.show = false

        addDetails(
            {
              week: this.curriculum_details.week,
              name: this.curriculum_details.name,
              student_link: this.curriculum_details.student_link,
              teacher_link: this.curriculum_details.teacher_link,
              documentation: this.curriculum_details.documentation
            })

        this.resetCurriculum()
      } else {
        this.error = true;
      }


    }
  }
}
</script>

<style scoped>

</style>