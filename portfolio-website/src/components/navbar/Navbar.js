import React from "react"
import logo from "./RcklessLogo.png"
import {useNavigate} from "react-router-dom"
import {AppBar, 
        Toolbar, 
        Typography, 
        Stack,
        Button, 
        IconButton} from "@mui/material"

const Navbar = (props) => {

const navigate = useNavigate()

return (
<AppBar>
    <Toolbar>
        <IconButton onClick={()=>{navigate("/")}}
        size="small"
        edge="start"
        color="secondary"
        sx={{bgcolor: "secondary.main", marginTop:".5rem", marginBottom:".5rem"}}>
            <img style={{ width: "3rem", height: "3rem"}} src={logo} alt="Logo"></img>
        </IconButton>
        <Typography 
            variant="h6"        
            component="div"       
            spacing={2} 
            sx={{flexGrow: 1,marginLeft:"2rem",fontFamily:"'Rufina', serif",fontSize:"2rem"}}
        >
            Robert Lewis
        </Typography>
        <Stack direction="row" spacing={2}>
            <Button onClick={()=>{navigate("/")}} variant="outlined" color="buttonOutline">Home</Button>
            <Button onClick={()=>{navigate("/projects")}} variant="outlined" color="buttonOutline">Projects</Button>
            <Button onClick={()=>{navigate("/about")}} variant="outlined" color="buttonOutline">About Me</Button>
            <Button onClick={()=>{navigate("/contact")}} variant="contained" color="secondary">Contact me!</Button>
        </Stack>
    </Toolbar>
</AppBar>
)
}

export default Navbar