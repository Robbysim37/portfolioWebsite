import ProfileCard from "./aboutComponents/ProfileCard"
import { Box } from "@mui/material"
import ProfileDescriptions from "./aboutComponents/ProfileDescriptions"

const AboutPage = () => {
    return (
        <Box sx={{width:"100vw",marginTop:"15vh",display:"flex",position:"absolute"}}>
            <ProfileCard/>
            <ProfileDescriptions/>
        </Box>
    )
}

export default AboutPage