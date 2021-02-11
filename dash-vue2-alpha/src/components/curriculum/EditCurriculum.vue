<template>
  <div>
    <v-btn
        class="mx-2"
        color="cyan"
        dark
        fab
        small
        @click="show = true"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-dialog
        v-model="show"
        persistent>
      <v-card>
        <!--    used from documentation on vuetify js https://vuetifyjs.com/en/components/dialogs/#without-activator-->
        <v-card-title>
          <span class="headline">Edit Curriculum</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-row>
                <v-col cols="9">
                  <v-text-field
                      v-model="curriculum_detail.name"
                      label="Curriculum Name*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      v-model="curriculum_detail.week"
                      label="Week*"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>


              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_detail.documentation"
                    label="Documentation*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_detail.teacher_link"
                    label="Teacher Project*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="curriculum_detail.student_link"
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
                  @click="updateCurriculum"
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


import {updateDetail} from "@/components/curriculum/CurriculumData";

export default {
  name: "EditCurriculum",
  props: {
    curriculum_detail: {},
  },
    data() {
      return {
        show: false,
        error: false,
      }
    },

    methods: {
      logID(){
        console.log(this.curriculum_detail.id)
      },
      updateCurriculum() {
        console.log("curriculum detail from edit curriculum")
        console.log(this.curriculum_detail)
        if (this.curriculum_detail.week.length > 0 &&
            this.curriculum_detail.name.length > 0 &&
            this.curriculum_detail.student_link.length > 0 &&
            this.curriculum_detail.teacher_link.length > 0 &&
            this.curriculum_detail.documentation.length > 0) {

          this.show = false

          updateDetail(
              {
                week: this.curriculum_detail.week,
                name: this.curriculum_detail.name,
                student_link: this.curriculum_detail.student_link,
                teacher_link: this.curriculum_detail.teacher_link,
                documentation: this.curriculum_detail.documentation
              },
              "curriculum",
              this.curriculum_detail.id,
          )

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