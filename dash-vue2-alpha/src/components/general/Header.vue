<template>
  <v-container>
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
      <v-row>
        <v-col cols="10">
          <v-card-title>
            <h3>Welcome Back {{ user.displayName }}</h3>
          </v-card-title>
        </v-col>
        <v-col cols="2">
          <v-btn color="transparent"  flat large height="100%" light class="ml-15 pt-1" style="margin-left: 10px">
            <v-icon @click="logOut" large>mdi-logout</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card> <!-- Header -->
  </v-container>
</template>

<script>
import {myProjectAuth, user} from "@/backend/backend";
import router from "@/router/router";

export default {
  name: "Header",
  data() {
    return {
      user
    }
  },
  methods: {
    logOut(){
      myProjectAuth.signOut()
      router.go(0)
    }
  }
}
</script>

<style scoped>

</style>