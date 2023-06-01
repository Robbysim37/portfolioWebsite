import { Grid } from "@mui/material"
import ProjectCard from "./ProjectCard"
import projectList from "./projectData"

const ProjectsPage = () => {
    return(
            <Grid container sx={{marginTop:"15vh",position:"absolute"}}>
                <Grid item>
                    <ProjectCard project={projectList[0]}></ProjectCard>
                </Grid>
            </Grid>
    )
}

export default ProjectsPage