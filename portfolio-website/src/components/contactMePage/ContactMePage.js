import { Box,Card,Link } from "@mui/material"
import ContactHeader from "./contactMeComponents/styledComponents/ContactHeader"
import ContactParagraph from "./contactMeComponents/styledComponents/ContactParagraph"

const ContactMePage = () => {
    return(
        <Box sx={{width:"100vw",marginTop:"15vh",display:"flex",position:"absolute",justifyContent:"center"}}>
            <Card 
            sx={{bgcolor: "primary.main",
            height:"80vh",
            width:"80vw",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginLeft:"1.5%",
            marginRight:"1.5%",
            borderRadius:"10px"}}>
                <ContactHeader>Contact Me!</ContactHeader>
                <ContactParagraph>Email:
                    <Link 
                    sx={{color:"text.white",marginLeft:".5vw"}}  
                    href={`mailto:robbysim37@gmail.com`}
                    rel="noopener noreferrer"
                    target="_blank">
                        Robbysim37@gmail.com
                    </Link>
                </ContactParagraph>
                <ContactHeader>External Websites</ContactHeader>
                <ContactParagraph>Github:
                    <Link 
                    sx={{color:"text.white",marginLeft:".5vw"}}  
                    href={`https://github.com/Robbysim37`}
                    rel="noopener noreferrer"
                    target="_blank">
                        Robbysim37
                    </Link>
                </ContactParagraph>
                <ContactParagraph>LinkedIn:
                    <Link 
                    sx={{color:"text.white",marginLeft:".5vw"}}  
                    href={`https://www.linkedin.com/in/robert-lewis-a224151a1/`}
                    rel="noopener noreferrer"
                    target="_blank">
                        Robert Lewis
                    </Link>
                </ContactParagraph>
            </Card>
        </Box>
    )
}

export default ContactMePage