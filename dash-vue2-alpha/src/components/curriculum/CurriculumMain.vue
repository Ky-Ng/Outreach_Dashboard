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
            @click="curriculum.show_details = true"
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
          {{ curriculum.name }}
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

          description: 'Help Cat get to the lemonade stand and back to his chair on the sandy beach! Use the forward, point in direction commands to help you. If you have extra time, say hi to the lemonade stand.',
          student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
          teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
          documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
        },
        {
          week: 2,
          name: 'Save the Lemonade',
          topic: "Fundamental Movement",
          show_details: false,
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
}
</style>