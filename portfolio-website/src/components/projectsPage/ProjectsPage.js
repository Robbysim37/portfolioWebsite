import { Grid } from "@mui/material"
import ProjectCard from "./ProjectCard"
import projectList from "./projectData"

const ProjectsPage = () => {
    return(
            <Grid container sx={{marginTop:"15vh",position:"absolute",
            display:"flex",justifyContent:"center",backgroundColor:"primary.dark"}}>
                {projectList.map(currCard => { return (
                <Grid item sx={{marginLeft:"3%",marginRight:"3%",marginBottom:"3%"}}>
                    <ProjectCard project={currCard}></ProjectCard>
                </Grid>
                )
                })}
            </Grid>
    )
}

export default ProjectsPage