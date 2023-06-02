import { Typography } from "@mui/material";

const DescriptionHeader = (props) => {
    return(
        <Typography sx={{
            fontSize:"2rem",
            fontFamily:"'Rufina', serif",
            color:"text.white",
            margin:"1%"}} 
            variant={props.variant}>
                {props.children}
            </Typography>
    )
}

export default DescriptionHeader