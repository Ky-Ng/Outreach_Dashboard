<template>
  <v-container>
    <v-card
        v-for="(curriculum, i) in curriculum_components"
        :key="i"
        class="my-3"
        color="pink lighten-5"
        elevation="2"
    >
      <v-card-title>
        <v-icon
            large
            @click="curriculum.show_details = !curriculum.show_details"
        >
          mdi-chevron-right
        </v-icon>
        <h3>Week {{ curriculum.week }}: {{ curriculum.name }}</h3>
        <v-col></v-col>
        <h4 class="font-italic">{{ curriculum.topic }}</h4>

        <v-card-text
            v-if="curriculum.show_details"
            class="title details"
        >
          <v-list-item :href="curriculum.documentation" target="_blank">Documentation: {{ curriculum.name }}</v-list-item>
          <v-list-item :href="curriculum.student_link" target="_blank">Student Project: {{ curriculum.name }}</v-list-item>
          <v-list-item :href="curriculum.teacher_link" target="_blank">Teacher Project: {{ curriculum.name }}</v-list-item>
        </v-card-text>

      </v-card-title>


    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CurriculumMain",
  data() {
    return {
      curriculum_components: [
        {
          week: 1,
          name: 'Lemonade Stand',
          topic: "Fundamental Movement",
          show_details: false,


          student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
          teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
          documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
        },
        {
          week: 2,
          name: 'Save the Lemonade',
          topic: "Fundamental Movement",
          show_details: false,

          description: 'descrip2',
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
.details {
  margin-left: 20px;
  text-align: left;
  word-wrap: break-word;
}
</style>