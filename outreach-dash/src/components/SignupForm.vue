<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="displayName">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup.js'
// TODO fix this

export default {
    setup(){ //our own function
        const {error, signup}  = useSignup() //values returned from the useSignup function
        // refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => { //will do the real ones with firebase
            //need be async to await for the async signup method
            await signup(email.value, password.value, displayName.value)
            console.log("User signed up good job!")
        }
        return {displayName, email, password, handleSubmit}
    }
}
</script>
