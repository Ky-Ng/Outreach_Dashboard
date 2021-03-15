<template>
  <v-card
      class="mx-auto"
      color="red accent-2"
      dark
      max-width="3000"
      src="@/assets/FullLOGO.png"
  >
    <v-img
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        max-height="200"
        src="@/assets/CropLOGO.png"
    ></v-img>
    <v-card-title>
      <h3>Welcome Back {{ user.displayName }}</h3>
    </v-card-title>
  </v-card> <!-- Header -->
</template>

<script>
import {user} from "@/backend/backend";

export default {
  name: "Header",
  data() {
    return {
      user
    }
  }
}
</script>

<style scoped>

</style>