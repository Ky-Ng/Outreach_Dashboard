<template>
  <v-container>
    <template>
      <v-card class="overflow-hidden">
        <v-app-bar
            absolute
            color="#fcb69f"
            dark
            shrink-on-scroll

            src=""
            scroll-target="#scrolling-techniques-2"
        >
          <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                min-height="350"
            ></v-img>
          </template>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-app-bar-title>Title</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-2"
            class="overflow-y-auto"
            max-height="600"
        >
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
      </v-card>
    </template>


















    <template>
      <v-card class="overflow-hidden">

        <v-app-bar
            absolute
            color="#6A76AB"
            dark
            fade-img-on-scroll
            height="400px"
            prominent
            scroll-target="#scrolling-techniques-3"
            shrink-on-scroll
            src="@/assets/FullLOGO.png"
        >

<!--          <template v-slot:img="{ props }">-->
<!--            <v-img-->
<!--                v-bind="props"-->
<!--                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"-->
<!--            ></v-img>-->
<!--          </template>-->

          <!--          the top right section -->
          <v-container
              style="min-height: 400px"
          >

          </v-container>
        </v-app-bar>

      </v-card>


    </template>

    <v-card
        src="@/assets/FullLOGO.png"
        class="mx-auto"
        color="red accent-2"
        dark
        max-width="3000"
    >
      <v-img
          src="@/assets/FullLOGO.png"
          max-height="350"
      ></v-img>
      <v-card-title>
        <h3>Welcome Back {{ USER.displayName }}</h3>
      </v-card-title>
    </v-card>

    <CurriculumMain></CurriculumMain>
  </v-container>
</template>

<script>
// @ is an alias to /src


import {myProjectAuth} from "@/backend/backend";
import CurriculumMain from "@/components/curriculum/CurriculumMain";

export default {
  name: 'Home',
  components: {
    CurriculumMain,
  },
  data() {
    return {
      USER: myProjectAuth.currentUser,

    }
  }
}
</script>

