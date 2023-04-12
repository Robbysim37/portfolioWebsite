const TestGrid = (props) => {

    return (
        <div style={{height:32,width:32}}>
        {props.block && <img src={`./pixels/testDirt.png`} alt="dirt"></img>}
        </div>
    )
}
export default TestGrid