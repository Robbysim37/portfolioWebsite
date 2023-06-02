import {Stack} from "@mui/material"
import DescriptionHeader from "../styledComponents/DescriptionHeader"
import Paragraph from "../styledComponents/Paragraph"

const Goals = () => {
    return(
        <Stack sx={{textAlign:"center",width:"85%"}}>
            <DescriptionHeader variant="h1">Goals</DescriptionHeader>
            <DescriptionHeader variant="h2">
                Short Term:
            </DescriptionHeader>
            <Paragraph>
                I want to start my career in web design, <br/>
                whether thats working on the frontend, backend, or fullstack
            </Paragraph>
            <Paragraph>
                I want to make fun coding projects, whether they are purely
                for entertainment, <br/>
                for professional purposes, or a mixture of both
            </Paragraph>
            <DescriptionHeader variant="h2">Long Term:</DescriptionHeader>
            <Paragraph>
                I want to work on developing games. Preferrably0video games, <br/>
                as the coding skills I have been learning will
                contribute a lot for this specific goal
            </Paragraph>
            <Paragraph>
                I want to have better work-life balance. A career I can look
                back on and be proud of, while also taking time to enjoy pastimes 
                that are fun and fufiling
            </Paragraph>
        </Stack>
    )
}

export default Goals