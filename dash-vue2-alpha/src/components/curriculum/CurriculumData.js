// this file stores the curriculum details
import {dataBase} from "@/backend/backend";

let curriculum_details = [
    {
        week: 1,
        name: 'Lemonade Stand',


        student_link: 'https://scratch.mit.edu/projects/392293538/editor/',
        teacher_link: 'https://scratch.mit.edu/projects/392339139/editor/',
        documentation: 'https://docs.google.com/document/d/1myUQSr9p_nidSYiDRLzR3SQxKBFRb8CyfOgTOQG8NTs/edit?usp=sharing'
    },
    {
        week: 2,
        name: 'Save the Lemonade',


        student_link: 'https://scratch.mit.edu/projects/395076094/editor/',
        teacher_link: 'https://scratch.mit.edu/projects/395061400/editor/',
        documentation: 'https://docs.google.com/document/d/1xzr88wAhpQrx8qtI1aXHauvCuZy9yeRivsZxiDSqTpQ/edit?usp=drive_web&ouid=105169288214493351359'
    },
]

// like an object types
function NewCurriculumDetail(week, name, student_link, teacher_link, documentation) {
    // return {week: week, name: name, student_link: student_link, teacher_link: teacher_link, documentation: documentation}
    this.week = week
    this.name = name
    this.student_link = student_link
    this.teacher_link = teacher_link
    this.documentation = documentation
}

function updateDetails(incoming_curriculum) {
    dataBase.collection("curriculum").add(incoming_curriculum).then( () =>{
        console.log("The local is")
        console.log(curriculum_details)

        console.log("The database object is")
        console.log(dataBase.collection("curriculum"))
        

        curriculum_details = dataBase.collection("curriculum")


        })

    curriculum_details.push(incoming_curriculum)
}

export {curriculum_details, updateDetails, NewCurriculumDetail}