import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

function BoxList (){
    const [boxList, setBoxList] = useState([]);

    function addBox(formData){
        const newBox = {...formData, id: uuid()}
        setBoxList(prev => [...prev, newBox])
    }

    function removeBox(id){
        let newBoxList = boxList.filter(box=> box.id !== id);
        setBoxList(newBoxList);

    }

    let displayBoxes = boxList.map(box => {
        return (
            <Box
                backgroundColor={box.backgroundColor}
                width={box.width}
                height={box.height}
                key={box.id}
                id={box.id}
                removeBox={removeBox}
            />
        )
        })

    return (
        <div>
            {displayBoxes}
            <NewBoxForm
            addBox={addBox}
            />
        </div>
    )
}

export default BoxList;



