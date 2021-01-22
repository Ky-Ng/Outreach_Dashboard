<template>
<!-- note user is a boolean -->
<div>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }} </p>
    </div>
    <button class="button" @click="handleClick">Logout</button>
  </nav>
  <nav v-else>
    <p>You are not signed in. Click here to reauthenticate.</p> 
    <!-- todo make thie reauth actually go to welcome -->
  </nav>
  </div>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout();
      if (!error.value){
          console.log('User Logged Out');
          router.push({ name: 'Welcome' })
      }
      console.log(error.value)
    }
    return {handleClick, user}
  },
  
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 20px;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
  position: relative;
}
</style>