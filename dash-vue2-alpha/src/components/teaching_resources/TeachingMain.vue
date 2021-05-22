<template>
  <v-container>


    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-col cols="11">
            <h2>Curriculum Dashboard: Serendipity Backpack</h2>
          </v-col>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
<!--          <v-list-item :href=" `https://bit.ly/serendipitySheet`" target="_blank">Create your own curriculum repository to streamline teaching resources, especially during Distance Learning</v-list-item>-->
<!--          <v-list-item :href=" `https://docs.google.com/document/d/178hD_GJt7F6s6zoXuBdKOhOvl7tQYQrfk_CzOCP3VHo/edit?usp=sharing`" target="_blank">Inspired by Serendipity STEM's Special Education outreach in STEM curriculum development-->
<!--          </v-list-item>-->
<!--          <v-list-item :href="`https://docs.google.com/document/d/15yU0rux8ty0kOUO1TVZrNz9ihbC47s-Bzt3gSuBWiAg/edit?usp=sharing`" target="_blank">Project for Ms. Berbawy's Principle of Engineering Course-->
<!--          </v-list-item>-->
          <v-list-item :href=" `https://bit.ly/serendipitySheet`" target="_blank">Serendipity STEM Master Sheet</v-list-item>
          <v-list-item :href="`https://docs.google.com/document/d/15yU0rux8ty0kOUO1TVZrNz9ihbC47s-Bzt3gSuBWiAg/edit?usp=sharing`" target="_blank">Train the Trainers Program</v-list-item>
          <v-list-item :href=" `https://docs.google.com/document/d/178hD_GJt7F6s6zoXuBdKOhOvl7tQYQrfk_CzOCP3VHo/edit?usp=sharing`" target="_blank">Curriculum Template</v-list-item>

        </v-expansion-panel-content>
<!--      <v-expansion-panel>-->
<!--        <v-expansion-panel-header>-->
<!--          <v-col cols="11">-->
<!--            <h2>Teaching Resources</h2>-->
<!--          </v-col>-->
<!--        </v-expansion-panel-header>-->

<!--        <v-expansion-panel-content>-->
<!--          <v-list-item :href=" `https://bit.ly/serendipitySheet`" target="_blank">Schedule and Sign Ups</v-list-item>-->
<!--          <v-list-item :href=" `https://docs.google.com/document/d/178hD_GJt7F6s6zoXuBdKOhOvl7tQYQrfk_CzOCP3VHo/edit?usp=sharing`" target="_blank">Curriculum Template-->
<!--          </v-list-item>-->
<!--          <v-list-item :href="`https://docs.google.com/document/d/15yU0rux8ty0kOUO1TVZrNz9ihbC47s-Bzt3gSuBWiAg/edit?usp=sharing`" target="_blank">Teaching Process-->
<!--          </v-list-item>-->
<!--          <v-list-item :href="`https://scratch.mit.edu`" target="_blank">Scratch (Username: SerendipityOutreach | Password: Ask a Veteran Teacher)-->
<!--          </v-list-item>-->
<!--        </v-expansion-panel-content>-->

      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import {exploration_curriculum, sortCurriculum} from "@/components/curriculum/CurriculumData";
import {getCollection} from "@/backend/backend";
import EditCurriculum from "@/components/curriculum/EditCurriculum";

export default {
  name: "TeachingMain",
  components: {

  },
  props: {

  },

  data() {
    return {}
  },

  mounted() {

  },

  beforeUpdate() {

  }
}
</script>

