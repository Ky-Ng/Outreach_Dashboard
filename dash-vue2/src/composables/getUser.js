import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

//if the person is currently logged in this is the value
const user = ref(projectAuth.currentUser)

//this function will fire when there is a status change
projectAuth.onAuthStateChanged((_user) => { 
    // this is known as a callback funciton
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser