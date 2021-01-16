<template>
  <div>
    <!-- <div class=" container">
      <NavBar />
    </div> -->
    <div class="welcome container">
      <p>Welcome to Serendipity STEM's Outreach Dashboard</p>
      <div v-if="isLogginIn">
        <LoginForm />
        <p>No Account? <span @click="isLogginIn = false">Sign Up</span></p>
      </div>
      <div v-else>
        <SignupForm />
        <p>Already a User? <span @click="isLogginIn = true">Sign In</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import NavBar from "../components/NavBar";

export default {
  components: {
    LoginForm,
    SignupForm,
    NavBar,
  },
  setup() {
    const isLogginIn = ref(true);
    return { isLogginIn };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  margin: 20px 30px;
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