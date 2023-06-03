import {Stack,Box} from "@mui/material"
import DescriptionHeader from "../styledComponents/DescriptionHeader"
import Paragraph from "../styledComponents/Paragraph"

const Professional = () => {
    return(
        <Stack sx={{textAlign:"center",width:"85%"}}>
            <DescriptionHeader variant="h1">Professional</DescriptionHeader>
            <Paragraph>
                When it comes to professional experience, I have none.
            </Paragraph>
            <Paragraph>
                Isn't thank exciting? You could be the first to hire me!
                You could onboard me while I'm still a green and optimistic
                devoloper, and watch that optimism fade as I spend my time
                fixing bugs beyond my current comprehension.
            </Paragraph>
            <Paragraph>
                Joking aside, I understand my lack of experience could be
                seen as a reason to pass me over, and to that I say this: I fully
                believe I will be an asset to any team that is willing to 
                go out on a limb and hire me. Computer Science is my passion. 
                I spend almost every waking moment thinking about projects and
                solving the problems those projects present.
            </Paragraph>
            <DescriptionHeader variant="h2">My Toolkit</DescriptionHeader>

<Box sx={{display:"flex",width:"100%",justifyContent:"space-around"}}>
  
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
  <img width="50px" height="50px" alt="alt" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
</Box>
        </Stack>
    )
}

export default Professional