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
        mdi-pencil
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
          <v-btn
              color="blue darken-1"
              text
              @click="addCurriculum"
          >
            Save
          </v-btn>
          <!--      TODO fix the issue if not all the components are met, do not allow submit-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddCurriculum",


  data() {
    return {
      show: false, //todo fix later
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
    addCurriculum() {
      console.log(this.curriculum_details)
      this.show = false
      this.emit('addedNewCurriculum', this.curriculum_details)
    }
  }
}
</script>

<style scoped>

</style>