import { Typography } from "@mui/material"

const ContactHeader = (props) => {
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

export default ContactHeader