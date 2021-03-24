// this file stores the curriculum details
import {dataBase} from "@/backend/backend";

let exploration_curriculum = [
//     {
//         week: 1,
//         name: 'Lemonade Stand',
//
//
//         student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
//         teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
//         documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
//     },
//     {
//         week: 2,
//         name: 'Save the Lemonade',
//
//
//         student_link: 'https://scratch.mit.edu/projects/395076094/editor/',
//         teacher_link: 'https://scratch.mit.edu/projects/395061400/editor/',
//         documentation: 'https://docs.google.com/document/d/1xzr88wAhpQrx8qtI1aXHauvCuZy9yeRivsZxiDSqTpQ/edit?usp=drive_web&ouid=105169288214493351359'
//     },
]

let fundamental_curriculum = []

function getCurriculumDetails(){
    return exploration_curriculum
}

function addDetails(incoming_curriculum) {
    // add frontend data to the backend
    dataBase.collection("curriculum").add(incoming_curriculum).then( () =>{
    })
}



function updateDetail(changes, collection, document_id){
    const destination = dataBase.collection(collection).doc(document_id);
    return destination.update(changes)
}

function deleteDetail(collection, document_id){
    dataBase.collection(collection).doc(document_id)
        .delete().then(() => {
        })
    exploration_curriculum.forEach(curriculum =>{
        if (curriculum.id === document_id){
            curriculum.show = false //the backend takes time to update the frontend deletion
        }
    })
}

function sortCurriculum(prop){
    exploration_curriculum.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    fundamental_curriculum.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
}

export {exploration_curriculum, fundamental_curriculum, updateDetail, sortCurriculum, deleteDetail, getCurriculumDetails, addDetails}