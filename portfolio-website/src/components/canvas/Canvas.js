import React, { useRef,useEffect,useState } from "react"

const Canvas = (props) => {
    let [shapes, setShapes] = useState({xStart:100,yStart:0,xLine:100,yLine:100})

    const canvasRef = useRef(null)

    const animate = () => {        
        const canvas = canvasRef.current
        const c = canvas.getContext("2d")
        c.fillStyle = "#666666"
        c.fillRect(0,0,c.canvas.width,c.canvas.height)
        c.fillStyle = "#999999"
        c.fillRect(100,shapes.yStart,100,100)
        requestAnimationFrame(animate)
        
        // setShapes({...shapes,yStart:shapes.yStart++})
    }

    useEffect(() => {

        animate()
    })

    return (
        <canvas
        ref={canvasRef} 
        width={window.innerWidth} 
        height={window.innerHeight}>
        </canvas>
    )
}

export default Canvas