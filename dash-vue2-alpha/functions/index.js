//Take out the admin stuff so it works on safari
// if (typeof window !== "undefined"){
//     const functions = require("firebase-functions");
//     const admin = require("firebase-admin")
//
//     admin.initializeApp()
//
// // data is the user information like email or username
// // context authentication information from firebase
// //exports is used to send out a function, https on call just means the method is onCall
// // or availible from the frontend
// //Net Ninja tutorial: https://www.youtube.com/watch?v=4wa3CMK4E2Y
//     exports.addAdminRole = functions.https.onCall((data, context) =>{
//         //get user and add custom claim (admin); since it is a promise it might not return immediately
//         console.log("hey the add admin role has been called")
//         return admin.auth().getUserByEmail(data.email).then(user => {
//             admin.auth().setCustomUserClaims(user.uid, {
//                 admin: true, //assigning the admin: true value pair to the custom user @ uid
//             });
//         }).then( () => {
//             return { // when the person has been made an admin, return a message
//                 message: `Success!  ${data.email} has been made an admin`
//             }
//         }).catch(err => {
//             console.log("there was an error")
//             console.log(err)
//             return err;
//         });
//     });
// }
