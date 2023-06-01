import { Card } from "@mui/material"
import {BIOGRAPHY,PROFESSIONAL,HOBBIES,GOALS} from "./stringUtils"
import Biography from "./ProfileDescContent/Biography"
import Professional from "./ProfileDescContent/Professional"
import Goals from "./ProfileDescContent/Goals"
import Hobbies from "./ProfileDescContent/Hobbies"

const ProfileDescriptions = (props) => {

    const {displayID} = props

    return(
        <Card 
        sx={{bgcolor: "primary.main",
        height:"80vh",
        width:"63vw",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginLeft:"1.5%",
        marginRight:"1.5%",
        borderRadius:"10px"}}>

        {displayID === BIOGRAPHY && <Biography/>}
        {displayID === PROFESSIONAL && <Professional/>}
        {displayID === HOBBIES && <Hobbies/>}
        {displayID === GOALS && <Goals/>}

        </Card>
    )
}

export default ProfileDescriptions