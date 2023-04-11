import {Box} from "@mui/material"
import Canvas from "./Canvas"

const CanvasBackground = (props) => {
    return (
        <Box sx={{position:"fixed", 
        zIndex: -1,
        width:"100vw",
        height:"100vh"}}>

            <Canvas></Canvas>

        </Box>
    )
}

export default CanvasBackground