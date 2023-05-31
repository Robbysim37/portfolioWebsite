import React from "react"
import './App.css';
import NavBar from "./components/navbar/Navbar"
import LandingPage from "./components/landingPage/LandingPage";
import {createTheme,ThemeProvider,Box} from "@mui/material"
import {Routes,Route} from "react-router-dom"

const theme = createTheme({
  palette: {
    text: {
      white: "white"
    },
    secondary: {
      main: "#d53d3e",
      light: "#dd6465",
      dark: "#aa3132"
    },
    primary: {
      main: "#434343",
      light: "#8e8e8e",
      dark: "#2f2f2f",
      contrastText: "#fff"
    },
    buttonOutline:{
      main: "#fff"
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar></NavBar>
      <Box sx={{width:"100vw",height:"100vh",backgroundColor:"primary.dark"}}>
      
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
      
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
