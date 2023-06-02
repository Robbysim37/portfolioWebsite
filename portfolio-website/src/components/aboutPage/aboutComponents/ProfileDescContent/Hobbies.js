import {Stack,List} from "@mui/material"
import DescriptionHeader from "../styledComponents/DescriptionHeader"
import Paragraph from "../styledComponents/Paragraph"

const Hobbies = () => {
    return(
        <Stack sx={{textAlign:"center",width:"85%"}}>
            <DescriptionHeader variant="h1">
                Hobbies
            </DescriptionHeader>
            <Paragraph>
                When I think about what I should write in this section not
                a lot comes to mind, the past year of my life has learning
                programming, and not a lot of freetime is leftover When
                you throw yourself at learning something as quickly as possible.
            </Paragraph>
            <Paragraph>
                That being said, here are a few things I currently
                spend my time on OR want to pursue in the future
            </Paragraph>
            <Stack direction={"row"}>
                <Stack sx={{width:"50%"}}>
                    <DescriptionHeader>What I do</DescriptionHeader>
                    <Paragraph>
                        Games! Playing and designing them <br/>
                        Currently reading through<br/>
                        "The Art of Game Design" by Jesse Schell
                    </Paragraph>
                    <Paragraph>
                        Fencing and HEMA <br/>
                        It's been awhile since I've done this competitively, 
                        but it's fun excersize! 
                    </Paragraph>
                </Stack>
                <Stack sx={{width:"50%"}}>
                <DescriptionHeader>What I want to do</DescriptionHeader>
                    <Paragraph>
                        Create YouTube videos <br/>
                        Looking into video ideas that <br/>
                        are fun and educational
                    </Paragraph>
                    <Paragraph>
                        Spend some time studying music<br/>
                        Piano is my favorite instrument and its
                        past time I learned to play 
                    </Paragraph>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Hobbies