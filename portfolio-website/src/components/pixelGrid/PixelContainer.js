import {Stack,Box} from "@mui/material"
import {useState} from "react"

const PixelContainer = () => {
 const IMG_SIZE = 32
 const initializeGrid = () => {
    const columns = Math.floor(window.innerWidth * .75 / IMG_SIZE)
    const rows = Math.floor(window.innerHeight *  .75 / IMG_SIZE)
    console.log(columns)
    const grid = []
    for (let i = 0; i < columns; i++){
        if( i === (columns - 1) && i % 2 === 1){
            console.log(`hits at ${i}`)
            break
        }
        grid.push([])
        for(let j = 0; j < rows; j++){
            if(j === (rows - 1) && j % 2 === 1){
                console.log(`hits at ${j}`)
                break
            }
            grid[i].push({x:i+1,y:j+1})
        }
    }
    return {
        grid:grid,
        gridHeight:grid[grid.length - 1].length,
        gridWidth:grid.length
    }
 }

 const [grid,setGrid] = useState(initializeGrid().grid)
 const [gridHeight, setGridHeight] = useState(initializeGrid().gridHeight)
 const [gridWidth, setGridWidth] = useState(initializeGrid().gridWidth)
 console.log(grid)
 console.log(gridWidth)
 console.log(gridHeight)

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
                                if(cell.x === Math.ceil(gridWidth / 2) 
                                && cell.y === Math.ceil(gridHeight / 2)){
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