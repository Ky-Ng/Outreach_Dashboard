<template>
  <div>
    <v-btn
        class="mx-2"
        color="cyan"
        dark
        fab
        large
        v-if="showAdd"
        @click="show = true"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-dialog
        v-model="show"
        persistent>
      <v-card>
        <!--    used from documentation on vuetify js https://vuetifyjs.com/en/components/dialogs/#without-activator-->
        <v-card-title>
          <span class="headline">Add Admin</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                    v-model="email"
                    label="New Admin Email"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="show = false"
          >
            Cancel
          </v-btn>
          <v-dialog
              max-width="345"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color="primary"
                  dark
                  @click="addAdmin"
              >
                Save
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="">
                Please fill out all required fields.
              </v-card-title>

            </v-card>
          </v-dialog>
          <!--          TODO fix uneven curriculum name and week-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {myProjectAuth} from "@/backend/backend";
import {addAdminRole} from "../../../functions";

export default {
  name: "MakeAdminForm",
  data(){
    return{
      email: "",
      show: false,
      showAdd: Boolean,
    }
  },
  mounted() {
    myProjectAuth.onAuthStateChanged(user => {
      user.getIdTokenResult().then(result => {
        this.showAdd = result.claims.admin
        console.log(user.displayName)
      })
    })
  },
  methods: {
    addAdmin(){
      if (! this.email.length > 0){
        addAdminRole(this.email)
      } else {
        this.show = false
      }

    }
  },
}
</script>

<style scoped>

</style>