import React, { useState } from "react";

const MenuButtons = ({data, handleFilter}) => {
    const [categories] = useState(() => {
        let setot = new Set(data.map(item => item.category));
        setot = ["all", ...setot];
        return setot;
    });
    return (  
        <React.Fragment>
            {categories.map((category, index) => <button key={index} onClick={() => handleFilter(category)}>{category}</button>)}
        </React.Fragment>
    );
}
 
export default MenuButtons;