<template>
  <v-container>
    <CurriculumNav @show_exploration="getShowFundamentals($event)"></CurriculumNav>
    <div>

      <ExplorationContent
          v-if="show_exploration"
          :curriculum_collection="`curriculum`"
          :target_curriculum_array="exploration_curriculum"
      ></ExplorationContent>


      <div v-else>
        <FundamentalsContent
            :curriculum_collection="`curriculum_fundamental`"
            :target_curriculum_array="fundamental_curriculum"
        ></FundamentalsContent>
      </div>
    </div>

  </v-container>
</template>

<script>
import CurriculumContent from "@/components/curriculum/CurriculumContent";
import CurriculumNav from "@/components/curriculum/CurriculumNav";
import {exploration_curriculum, fundamental_curriculum} from "@/components/curriculum/CurriculumData";

export default {
  name: "CurriculumMain",
  components: {
    FundamentalsContent: CurriculumContent,
    ExplorationContent: CurriculumContent,
    CurriculumNav
  },
  data() {
    return {
      exploration_curriculum,
      fundamental_curriculum,
      show_exploration: Boolean,
    }
  },
  methods: {
    getShowFundamentals(bool) {
      this.show_exploration = bool
      console.log("The show exploration status is " + this.show_exploration)
    }
  }
}
</script>

<style scoped>

</style>