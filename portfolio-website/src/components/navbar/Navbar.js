import React from "react"
import logo from "./RcklessLogo.png"
import {AppBar, 
        Toolbar, 
        Typography, 
        Stack,
        Button, 
        IconButton} from "@mui/material"

const Navbar = (props) => {


return (
<AppBar>
    <Toolbar>
        <IconButton size="small"
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
            <Button variant="outlined" color="buttonOutline">Home</Button>
            <Button variant="outlined" color="buttonOutline">Projects</Button>
            <Button variant="outlined" color="buttonOutline">About Me</Button>
            <Button variant="contained" color="secondary">Contact me!</Button>
        </Stack>
    </Toolbar>
</AppBar>
)
}

export default Navbar