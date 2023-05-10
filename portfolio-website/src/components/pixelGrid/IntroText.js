import { Typography } from "@mui/material"


const IntroText = () => {
    return(
    <><Typography 
        sx={{position:"absolute",
            zIndex:"1",
            color: "white",
            fontFamily:"'Rufina', serif",
            fontSize:"3rem"}}>
                Coding for my future,
        </Typography>
        <Typography 
        sx={{position:"absolute",
            zIndex:"1",
            fontFamily:"'Rufina', serif",
            fontSize:"3rem",
            color: "white",
            justifySelf:"baseline",
            alignSelf:"flex-end",
            marginBottom:"10px"}}>
                and coding for fun!
        </Typography></>)
    
}

export default IntroText