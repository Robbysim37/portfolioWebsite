import { Card,CardMedia,CardContent,Typography } from "@mui/material"
const ProjectCard = (props) => {
    console.log(props)
    return(
        <Card sx={{height:"30vh",width:"30vw"}}>
            <CardMedia  height={"100px"} component={"img"} image={props.project.image}></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.project.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard