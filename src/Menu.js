import React, { useState } from "react";
import data from "./data";
import MenuButtons from "./MenuButtons";
import MenuItem from "./MenuItem";

const Menu = () => {
    const [mainData] = useState(data);
    const [usedData, setUsedData] = useState(mainData);

    const handleFilter = (category) => {
        if(category === "all"){
            setUsedData(mainData);
            return;
        }
        let tmpArray = mainData.filter(item => item.category === category);
        setUsedData(tmpArray);
    }

    return (  
        <section className="menu">
            <div className="naslov ta-center mb-20">
                <h2>NB Menu</h2>
                <div className="underline"></div>
            </div>

            <div className="btn-container d-flex justify-center align-center mb-36">
                <MenuButtons data={mainData} handleFilter={handleFilter}/>
            </div>

            <div className="item-container d-flex space-between flex-wrap">
                {usedData.map(item => <MenuItem  {...item} key={item.id} />)}
            </div>
        </section>
    );
}
 
export default Menu;