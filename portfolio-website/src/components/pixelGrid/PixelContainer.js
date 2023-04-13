import {Stack,Box} from "@mui/material"
import {useState,useEffect} from "react"

const PixelContainer = () => {
 const IMG_SIZE = 32
 const initializeGrid = () => {
    const columns = Math.floor(window.innerWidth * .75 / IMG_SIZE)
    const rows = Math.floor(window.innerHeight *  .75 / IMG_SIZE)
    const grid = []
    for (let i = 0; i < columns; i++){
        if( i === (columns - 1) && i % 2 === 1){
            break
        }
        grid.push([])
        for(let j = 0; j < rows; j++){
            if(j === (rows - 1) && j % 2 === 1){
                break
            }
            grid[i].push({x:i+1,y:j+1})
        }
    }
    return grid
 }
 const [grid,setGrid] = useState(initializeGrid())
 const [gridHeight, setGridHeight] = useState(grid[grid.length - 1].length)
 const [gridWidth, setGridWidth] = useState(grid.length)
 const [drawGuy, setDrawGuy] = useState({x: Math.ceil(gridWidth / 2),y: Math.ceil(gridHeight / 2)})

 const SECONDS_MS = 1000

 const renderGuy = (dir) => {
    switch(dir){
        case 0:
            setDrawGuy({...drawGuy,x:drawGuy.x - 1})
            break
        case 1:
            setDrawGuy({...drawGuy,y:drawGuy.y - 1})
            break
        case 2:
            setDrawGuy({...drawGuy,x:drawGuy.x + 1})
            break
        case 3:
            setDrawGuy({...drawGuy,y:drawGuy.y + 1})
            break
        default:
            break
    }
    console.log(drawGuy)
 }
 
 useEffect(() => {
    const interval = setInterval(() => {
        const dir = Math.floor(Math.random() * 4)
        console.log(dir)
        renderGuy(dir)
      }, SECONDS_MS)
      return () => clearInterval(interval)
}, [renderGuy])

    return (
        
        <Box sx={{
            width:"100%",
            height: "100%",
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center"}}>
            <Box sx={{border:".2rem black solid"}}>  
            <Stack direction={"row"}>
                {grid.map(col => {
                    return (
                        <Stack direction={"column"}>
                            {col.map(cell => {
                                if(cell.x === drawGuy.x 
                                && cell.y === drawGuy.y){
                                    return <img src="./pixels/randomGuy.png" alt="test"/>
                                }else {
                                    return <div style={{height:32,width:32,backgroundColor:"#1b2447"}}></div>
                                }
                            })}
                        </Stack>
                    )
                })}
            </Stack>
            </Box>
        </Box>
    )
}

export default PixelContainer