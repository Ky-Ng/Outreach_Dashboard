import firebase from 'firebase'
import {sortCurriculum} from "@/components/curriculum/CurriculumData";

let secrets = require("../../functions/.runtimeconfig.json");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: secrets.mysecrets.apikey,
    authDomain: secrets.mysecrets.authdomain,
    projectId: secrets.mysecrets.projectid,
    storageBucket: secrets.mysecrets.storagebucket,
    messagingSenderId: secrets.mysecrets.messagingsenderid,
    appId: secrets.mysecrets.projectkey,
    measurementId: secrets.mysecrets.measurementid,
};

// init firebase
firebase.initializeApp(firebaseConfig)

const myProjectAuth = firebase.auth()
let user = myProjectAuth.onAuthStateChanged(() => {
    user = myProjectAuth.currentUser
})

// const auth = firebase.getAuth()

let isAdmin = true

    // myProjectAuth.onAuthStateChanged(auth, (user) => {
    //     user.getIdTokenResult().then(result => {
    //         isAdmin = result.claims.admin
    //         console.log(user.displayName)
    //     })
    // })

const dataBase = firebase.firestore()

function hasSameDoc(localCollection, incomingObject) {
    return !!localCollection.some(localDoc => localDoc.id === incomingObject.doc.id);
}

function getCollection(collection, targetArray) {
    dataBase.collection(collection).onSnapshot(res => {

        const changes = res.docChanges()
        changes.forEach(change => {

            if (change.type === 'added' && !hasSameDoc(targetArray, change)) {
                targetArray.push({
                    ...change.doc.data(),
                    id: change.doc.id, //custom id generated by firebase
                })

                console.log("Change in Data")
                try {
                    sortCurriculum("week")
                }catch (e) {
                    console.log(e)
                }
            }
        })
    })
}


export {myProjectAuth, user, isAdmin, dataBase, getCollection}