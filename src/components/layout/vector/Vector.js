import React from 'react'

function Vector({vectorData}) {
    // console.log(vectorData);
    // filter: "blur(75px)",
    // background: "linear-gradient(206deg, rgba(246, 32, 0, 0.5), rgb(232 77 230))",
    // height: "350px",
    // width: "300px",
    // position:"absolute",
    // opacity: "1",
    // top: "10px",
    // left: "-100px",
    // transform:"rotate(6deg)",
    // borderRadius:"50% 20%"
    const config = {
        filter: `blur(${vectorData.blur})`,
        background: `${vectorData.background}`,
        height: `${vectorData.height}`,
        width: `${vectorData.width}`,
        position:"absolute",
        opacity: "1",
        top: `${vectorData.top}`,
        left: `${vectorData.left}`,
        right: `${vectorData.right}`,
        bottom: `${vectorData.bottom}`,
        transform:`rotate(${vectorData.rotate}deg)`,
        borderRadius:"50% 20%",
        zIndex:`${vectorData.zIndex}`,
        pointerEvents:"none"
    }
    const position = ["top", "left", "right", "bottom"];
    position.forEach((prop) => {
        if (!Object.keys(vectorData).includes(prop)) {
            delete config[prop];
        }
    });

  return (
    <div className='vector' style={config}></div>
  )
}

export default Vector