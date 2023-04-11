import React, { useRef,useEffect } from "react"

const Canvas = (props) => {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const c = canvas.getContext("2d")
        c.fillStyle = "#666666"
        c.fillRect(0,0,c.canvas.width,c.canvas.height)
        console.log(props.headerHeight)
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