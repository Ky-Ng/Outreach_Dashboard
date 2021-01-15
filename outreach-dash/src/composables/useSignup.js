//async means that this runs after main thread and don't block code after,
// complete asap after main thread done
import {ref} from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null) //objects like refs are bassed by reference not value

const signup = async (email, password, displayName) => { 
    error.value = null
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password) 
        //try to sign up user with given email and pass, it also returns a boolean  
        if (!response){
            throw new Error("could not complete the sign up")
        }
        console.log(response.user)

    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = async () => {
    return {error, signup}
}

export default useSignup