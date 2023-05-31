import {Stack,Box,Button,Link} from "@mui/material"
import {useState,useEffect} from "react"
import IntroText from "./IntroText"

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
            grid[i].push({isPath:false,path:{up:false,down:false,left:false,right:false}})
        }
    }
    return grid
 }
 const [grid,setGrid] = useState(initializeGrid())
 const [gridHeight, setGridHeight] = useState(grid[grid.length - 1].length)
 const [gridWidth, setGridWidth] = useState(grid.length)
 const [drawGuy, setDrawGuy] = useState({x: Math.floor(gridWidth / 2),y: Math.floor(gridHeight / 2)})
 const [showText, setShowText] = useState(true)

 const HALF_SECOND_MS = 500

 const renderGuy = (dir) => {
    if(drawGuy.x < 1 || drawGuy.y < 1 || drawGuy.x === gridWidth - 1|| drawGuy.y === gridHeight -1)
    {
        setDrawGuy({x: Math.floor(gridWidth / 2),y: Math.floor(gridHeight / 2)})
        setGrid(initializeGrid())
    }else{
        const newGrid = [...grid];

        newGrid[drawGuy.x][drawGuy.y].isPath=true
        switch(dir){
        case 0:
            newGrid[drawGuy.x][drawGuy.y].path.left = true
            newGrid[drawGuy.x - 1][drawGuy.y].path.right= true
            setDrawGuy({...drawGuy,x:drawGuy.x - 1})
            break
        case 1:
            newGrid[drawGuy.x][drawGuy.y].path.up = true
            newGrid[drawGuy.x][drawGuy.y - 1].path.down= true
            setDrawGuy({...drawGuy,y:drawGuy.y - 1})
            break
        case 2:
            newGrid[drawGuy.x][drawGuy.y].path.right = true
            newGrid[drawGuy.x + 1][drawGuy.y].path.left= true
            setDrawGuy({...drawGuy,x:drawGuy.x + 1})
            break
        case 3:
            newGrid[drawGuy.x][drawGuy.y].path.down = true
            newGrid[drawGuy.x][drawGuy.y + 1].path.up= true
            setDrawGuy({...drawGuy,y:drawGuy.y + 1})
            break
        default:
            break
    }}}
 
 useEffect(() => {
    const interval = setInterval(() => {
        const dir = Math.floor(Math.random() * 4)
        renderGuy(dir)
      }, HALF_SECOND_MS)
      return () => clearInterval(interval)
}, [renderGuy])

    return (
        <Box sx={{
            width:"100%",
            height: "100%",
            display:"flex", 
            flexDirection:"column",
            justifyContent:"center", 
            alignItems:"center"}}>
            <Box sx={{border:".2rem black solid",marginTop:"5rem"}}>
                <Stack direction={"row"} sx={{display:"flex",justifyContent:"center"}}>
                {showText && <IntroText></IntroText>}
                    {grid.map((col,colIndex) => {
                        return (
                            <Stack direction={"column"}>
                                {col.map((cell,cellIndex) => {
                                    if(colIndex === drawGuy.x 
                                    && cellIndex === drawGuy.y){
                                        return <img src="./pixels/randomGuy.png" alt="test"/>
                                    }
                                    else if(cell.isPath){
                                        let up = ""
                                        let down = ""
                                        let left = ""
                                        let right = ""
                                        if(grid[colIndex][cellIndex].path.up){
                                            up = "up"
                                        }
                                        if(grid[colIndex][cellIndex].path.down){
                                            down = "down"
                                        }
                                        if(grid[colIndex][cellIndex].path.left){
                                            left = "left"
                                        }
                                        if(grid[colIndex][cellIndex].path.right){
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
            <Button 
            sx={{margin:"10px"}} 
            variant="contained" 
            onClick={() => setShowText(!showText)}>
                {showText ? "Hide Text" : "Show Text"}
            </Button>
            <Link 
            sx={{color:"white",fontSize:"2rem",fontFamily:"'Rufina', serif"}}
            target="_blank"
            underline="hover" 
            href="https://en.wikipedia.org/wiki/Random_walk">
                What is a random walks model?
            </Link>
        </Box>
    )
}

export default PixelContainer