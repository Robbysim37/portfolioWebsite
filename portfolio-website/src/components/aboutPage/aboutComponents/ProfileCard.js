import { Card,CardMedia,Typography,Button,ButtonGroup,Box } from "@mui/material"
import headshot from "../aboutPageAssets/Headshot.jpg"

const ProfileCard = (props) => {

    const setDisplay = (e) => {
        props.setDisplayID(e.target.value)
    }

    return (
        <Card 
            sx={{bgcolor: "primary.main",
            height:"80vh",
            width:"33vw",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginLeft:"1.5%",
            marginRight:"1.5%",
            borderRadius:"10px"}}>

            <CardMedia 
            sx={{height:"35%",
            width:"40%",
            borderRadius:"50%",
            margin:"2%"}}
            component={"img"} 
            image={headshot}/>

            <Typography sx={{fontFamily:"'Rufina', serif",
            textAlign:"center",
            color:"text.white",
            fontSize:"1.2rem",
            outlineColor:"black",
            outline:"10px"}}>
                "You're only given one little spark of madness. 
                You mustn't lose it." <br/> - Robin Williams
            </Typography>

            <Box sx={{margin:"3%"}}>
                <ButtonGroup variant="contained" orientation="vertical">
                    <Button value={"biography"} onClick={setDisplay}>Biography</Button>
                    <Button value={"hobbies"} onClick={setDisplay}>Hobbies</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" orientation="vertical">
                    <Button value={"professional"} onClick={setDisplay}>Professional</Button>
                    <Button value={"goals"} onClick={setDisplay}>Goals</Button>
                </ButtonGroup>
            </Box>

        </Card>
    )
}

export default ProfileCard