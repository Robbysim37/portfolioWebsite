// Project Data Shape //
// {
//      name: string
//      description: string
//      link: string
//      image: ref to image file
// }

import qizurdLogo from "./projectImages/qizurdLogo.png"
import mgstimg from "./projectImages/MGST.png"
import connectfour from "./projectImages/connectFour.png"
import knucklebones from "./projectImages/knuckleBones.png"
import binary from "./projectImages/binary.png"


const qizurdProject = {
    name:"Qizurd",
    description:
    `Qizurd is a lightweight, FullStack application designed for a user to quiz
    students on custom made quizzes and questions.`,
    link:"https://qizurd-robsim37.vercel.app/",
    image: qizurdLogo
}

const MGST = {
    name: "MapleGrove Student Tracker",
    description:
    `This is a student schedule/progress tracker
    designed to help staff and students keep track of graduation progress.`,
    link:"https://youtu.be/sIBnrap4mIs",
    image: mgstimg
}

const connectFour = {
    name: "Connect 4 demo (2-Player)",
    description: 
    `This is a quickly hashed out version of connect 4, no computer opponent as of right now.`,
    link:"https://connect-four-react-zeta.vercel.app/",
    image: connectfour
}

const knuckleBones = {
    name: "Knuckle Bones Angular Demo",
    description: 
    `This is a demo of "Cult of the Lamb" minigame, Knucklebones!
    This is my first angular projects, mainly for learning basics of Angular.`,
    link:"https://angular-knucklebones-demo.vercel.app/",
    image: knucklebones
}

const binarySudokuSolver = {
    name: "Binary Sudoku Solver",
    description: `0 or 1, yellow or blue. This is a solver I designed to
    solve puzzles from "0h h1" by Martin Kool`,
    link:"https://binary-sudoku-solver.vercel.app/",
    image: binary
}

const placeHolder = {
    name: "Test",
    description: "This is a test",
    link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: qizurdLogo
}

const projectList = [
    qizurdProject,
    MGST,
    connectFour,
    knuckleBones,
    binarySudokuSolver
]

export default projectList

