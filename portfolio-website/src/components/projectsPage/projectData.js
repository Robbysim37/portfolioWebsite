// Project Data Shape //
// {
//      name: string
//      description: string
//      link: string
//      image: ref to image file
// }

import qizurdLogo from "./projectImages/qizurdLogo.png"

const qizurdProject = {
    name:"Qizurd",
    description:
    "Qizurd is a lightweight, FullStack application" + 
    "designed for a user to quiz students on custom made quizzes and questions",
    link:"https://qizurd-robsim37.vercel.app/",
    image: qizurdLogo
}

const placeHolder = {
    name: "Test",
    description: "This is a test",
    link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: qizurdLogo
}

const projectList = [
    qizurdProject
]

export default projectList

