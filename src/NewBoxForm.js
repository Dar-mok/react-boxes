import React, { useState } from "react";

function NewBoxForm ({ addBox }){
    const defaultFormData = {
        backgroundColor: "",
        width: "",
        height: ""
    }

    const [formData, setFormData] = useState(defaultFormData);

    function handleChange(evt){
        const fieldName = evt.target.name;
        const value = evt.target.value;

        setFormData(currData => {
            currData[fieldName] = value;
            return {...currData};
        });
    }

    function handleSubmit(evt){
        evt.preventDefault();
        addBox(formData)
        const copy = {...defaultFormData}
        setFormData({
            backgroundColor: "",
            width: "",
            height: ""
        })
    }

    return (
            <form onSubmit={handleSubmit}>

                <label htmlFor="backgroundColor">Background Color</label>
                <input
                 id="backgroundColor"
                 name="backgroundColor"
                 type="text"
                 value={formData.backgroundColor}
                 onChange={handleChange}
                 />

                <label htmlFor="width">Width</label>
                <input
                id="width"
                name="width"
                type="number"
                value={formData.width}
                onChange={handleChange}
                />

                <label htmlFor="height">Height</label>
                <input
                id="height"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                />
                <button>submit</button>

            </form>
    );
}
export default NewBoxForm;