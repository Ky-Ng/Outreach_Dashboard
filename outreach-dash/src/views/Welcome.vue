<template>
  <div>
    <!-- <div class=" container">
      <NavBar />
    </div> -->
    <div class="welcome">
    <div class="welcome container">
      <p>Welcome to Serendipity STEM's Outreach Dashboard</p>
      <div v-if="isLogginIn">
        <LoginForm @login="toHome"/>
        <p>No Account? <span @click="isLogginIn = false">Sign Up</span></p>
      </div>
      <div v-else>
        <SignupForm @signup="toHome"/>
        <p>Already a User? <span @click="isLogginIn = true">Sign In</span></p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import NavBar from "../components/NavBar";
import { useRouter } from 'vue-router'
import { getUser } from '../composables/getUser'

export default {
  components: {
    LoginForm,
    SignupForm,
    NavBar,
  },
  setup() {
    const isLogginIn = ref(true);

    //setting up router for going to various pages
    const router = useRouter()
    // const { user } = getUser()

    const toHome = () =>{
      router.push({ name: 'Home' }) //Home Component 
    }
    // if(user.value == null){
    //   router.push({ name: 'Home' })
    // }

    return { isLogginIn, toHome };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  margin: 90px 30px;
  border-radius: 20px;
}

.welcome label {
  display: block;
  margin: 20px auto;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
/* make the input boxes small or big (responsibe) */
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  background: light;
  outline: none;
  /* color: ; */
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
}
</style>