<template>
  <v-container>
    <v-card

        class="mx-auto my-3"
        max-width="900"
    >
      <v-img
          class="white--text align-end"
          height="400px"
          src="../assets/FullLOGO.png"
      >
        <v-card-title>Community Outreach Reengineered</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">

      </v-card-subtitle>

      <v-card-text class="text--primary" >
        It looks like a stroke of serendipity, but we can't find your page.
      </v-card-text>
      <v-btn
          color="error"
          style="margin-bottom: 10px; padding-left: 10px; margin-left: 10px"
        @click="reroute"
      >
        Return to your quest of helping the community!
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import router from "@/router/router";

export default {
  name: "Error",
  methods:{
    reroute(){
      router.push({name: 'AuthPage'})
    }
  }
}
</script>

<style scoped>

</style>