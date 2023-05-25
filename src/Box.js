import React, { useState } from "react";

function Box({ backgroundColor, width, height }) {
    let styles = {
        backgroundColor: {backgroundColor},
        width: {width},
        height: {height},
    }
    return (<div>
                <div style = {{styles}}>test </div>
                <h2>hello</h2>
                <button>X</button>
            </div>
           );

}
  export default Box;
