function Box({ backgroundColor, width, height }) {
    const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
    let styles = {
        backgroundColor: {backgroundColor},
        width: {width},
        height: {height},
    }
    return (<div>
                <div style = {styles}> </div>
                <button>X</button>
            </div>
           );


  export default Cell;
