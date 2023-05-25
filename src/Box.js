import React, { useState } from "react";

function Box({ backgroundColor, width, height, removeBox, id}) {

    let styles = {
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}px`
    }

    return (<div>
                <div style={styles}></div>
                <button onClick={()=>removeBox(id)}>X</button>
            </div>
           );
}
  export default Box;
