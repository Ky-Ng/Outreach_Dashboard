<template>
  <v-container>
    <CurriculumNav @show_fundmentals="this.show_fundamentals = "></CurriculumNav>
    <FundamentalsContent
    :curriculum_collection="`curriculum_fundamental`"
    :target_curriculum_array="fundamental_curriculum"
    ></FundamentalsContent>
    <ExplorationContent
        :curriculum_collection="`curriculum`"
        :target_curriculum_array="curriculum_details"
    ></ExplorationContent>


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
 data(){
    return{
      exploration_curriculum,
      fundamental_curriculum,
      show_fundamentals: Boolean,
    }
 }
}
</script>

<style scoped>

</style>