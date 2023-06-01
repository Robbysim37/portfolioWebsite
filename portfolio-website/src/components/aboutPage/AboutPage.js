import { useState } from "react"
import ProfileCard from "./aboutComponents/ProfileCard"
import { Box } from "@mui/material"
import ProfileDescriptions from "./aboutComponents/ProfileDescriptions"

const AboutPage = () => {

    const [displayID,setDisplayID] = useState("biography")

    return (
        <Box sx={{width:"100vw",marginTop:"15vh",display:"flex",position:"absolute"}}>
            <ProfileCard setDisplayID={setDisplayID}/>
            <ProfileDescriptions displayID={displayID}/>
        </Box>
    )
}

export default AboutPage