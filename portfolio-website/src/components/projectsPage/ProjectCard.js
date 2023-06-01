import { Card,CardMedia,CardContent,CardActionArea,Typography } from "@mui/material"
const ProjectCard = (props) => {
    console.log(props)
    return(
        <Card sx={{width:"25vw",bgcolor: "primary.main",borderRadius:"10px"}}>
            <CardActionArea target="_blank" href={props.project.link}>
                <CardMedia component={"img"} image={props.project.image}></CardMedia>
                <CardContent>
                    <Typography gutterBottom color="text.white" variant="h5" component="div">
                        {props.project.name}
                    </Typography>
                    <Typography variant="body2" color="text.white">
                        {props.project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProjectCard