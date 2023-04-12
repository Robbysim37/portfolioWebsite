import {Box} from "@mui/material"
import {useRef,useEffect,useState} from "react"
import GridRender from "./GridRender"

const PixelContainer = () => {
    const containerRef = useRef(null)

    let [width,setWidth] = useState(0)
    let [height,setHeight] = useState(0)
    let [grid,setGrid] = useState([])

    useEffect(() => {
        setWidth(containerRef.current.offsetWidth)
        setHeight(containerRef.current.ofsetHeight)
        if(width){
            let gridBuilder = []
            for(let row = 0 ; row < (height / 32) ; row++){
                const currentRow = []
                for(let col = 0 ; col < (width / 32) ; col++){
                    currentRow.push("block")
                }
                gridBuilder.push(currentRow)
            }     
            setGrid(gridBuilder)
        }

    },[width,height])

    return (
        <Box ref={containerRef} sx={{width:"100vw",height:"100vh"}}>
            {console.log(grid)}
        </Box>
    )
}

export default PixelContainer