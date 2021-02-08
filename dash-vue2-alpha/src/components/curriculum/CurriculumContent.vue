<template>
  <v-container>
    <v-expansion-panels
        v-for="(curriculum, i) in curriculum_components"
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
export default {
  name: "CurriculumContent",
  data() {
    return {
      curriculum_components: [
        {
          week: 1,
          name: 'Lemonade Stand',

          show_details: false,


          student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
          teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
          documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
        },
        {
          week: 2,
          name: 'Save the Lemonade',

          show_details: false,


          student_link: 'https://scratch.mit.edu/projects/395076094/editor/',
          teacher_link: 'https://scratch.mit.edu/projects/395061400/editor/',
          documentation: 'https://docs.google.com/document/d/1xzr88wAhpQrx8qtI1aXHauvCuZy9yeRivsZxiDSqTpQ/edit?usp=drive_web&ouid=105169288214493351359'
        },
      ],
    }
  },
  methods: {}
}
</script>

<style scoped>
/*.details {*/
/*  margin-left: 20px;*/
/*  text-align: left;*/
/*  word-wrap: break-word;*/
/*}*/
</style>