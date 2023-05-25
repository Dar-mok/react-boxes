import React, { useState } from "react";
import Box from "./Box";

function BoxList (){
    const [boxList, setBoxList] = useState([]);


    const [FormData, setFormData] = useState({
        backgroundColor: "",
        width: "",
        height: ""
    });

    function handleChange(evt){
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => {
            currData[fieldName] = value;
            return {...currData};
        });
    }


    let display = boxList.map(box => <Box />)


    return (
        <div>

        </div>
    )

    export BoxList;

}



