import {Stack,Box} from "@mui/material"
import {useState,useEffect} from "react"

const PixelContainer = () => {
 const IMG_SIZE = 32
 const initializeGrid = () => {
    const columns = Math.floor(window.innerWidth * .75 / IMG_SIZE)
    const rows = Math.floor(window.innerHeight *  .75 / IMG_SIZE)
    const grid = []
    for (let i = 0; i < columns; i++){
        if( i === (columns - 1) && i % 2){
            break
        }
        grid.push([])
        for(let j = 0; j < rows; j++){
            if(j === (rows - 1) && j % 2){
                break
            }
            grid[i].push({path:false,x:i+1,y:j+1})
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
    if(drawGuy.x < 2 || drawGuy.y < 2 || drawGuy.x > gridWidth - 1 || drawGuy.y > gridHeight - 1)
    {
        setDrawGuy({x: Math.ceil(gridWidth / 2),y: Math.ceil(gridHeight / 2)})
        setGrid(initializeGrid())
    }else{
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
    }
    
 }
 
 useEffect(() => {
    const interval = setInterval(() => {
        const dir = Math.floor(Math.random() * 4)
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
                {grid.map((col,colIndex) => {
                    return (
                        <Stack direction={"column"}>
                            {col.map((cell,cellIndex) => {
                                if(cell.x === drawGuy.x 
                                && cell.y === drawGuy.y){
                                    grid[colIndex][cellIndex].path = true
                                    return <img src="./pixels/randomGuy.png" alt="test"/>
                                }
                                else if(cell.path){
                                    let up = ""
                                    let down = ""
                                    let left = ""
                                    let right = ""
                                    if( col[cellIndex - 1] === undefined ||
                                        col[cellIndex + 1] === undefined ||
                                        grid[colIndex - 1] === undefined ||
                                        grid[colIndex + 1] === undefined)
                                        {
                                            return <div style={{height:32,width:32,backgroundColor:"#1b2447"}}></div>
                                        }
                                    if(col[cellIndex - 1].path){
                                        up = "up"
                                    }
                                    if(col[cellIndex + 1].path){
                                        down = "down"
                                    }
                                    if(grid[colIndex - 1][cellIndex].path){
                                        left = "left"
                                    }
                                    if(grid[colIndex + 1][cellIndex].path){
                                        right = "right"
                                    }
                                    return <img src={`./pixels/${up}${down}${left}${right}.png`} alt={`Block`}/>
                                }
                                else {
                                    return <div style={{height:IMG_SIZE,width:IMG_SIZE,backgroundColor:"#1b2447"}}></div>
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