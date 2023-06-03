import { Typography } from "@mui/material";

const ContactParagraph = (props) => {
    return(
        <Typography sx={{
            fontSize:"1.2vw",
            fontFamily:"'Rufina', serif",
            color:"text.white",
            margin:"2%"}}>
                {props.children}
            </Typography>
    )
}

export default ContactParagraph