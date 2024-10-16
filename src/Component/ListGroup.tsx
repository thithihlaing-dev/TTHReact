import React from "react";
import {  useState } from "react";


function ListGroup() {
    let items = ["New", "San", "Tokyo", "London"];
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>List Group</h1>
            {/* {items.length==0 ? <p>Item not found</p> : null} */}
            {items.length == 0 && <p>Item not found</p>}
            <ul className="list-group">
                {items.map((item,index) => (
                     <li
                     key={index}
                     className={`cursor-pointer p-2 border border-gray-300 rounded-md
                         ${selectedIndex === index ? "bg-blue-500 text-white font-semibold" : "bg-white text-gray-700"}`}
                     onClick={() => setSelectedIndex(index)}
                 >
                     {item}
                 </li>
                ))
                }
            </ul>
        </>

        /* <Fragment>
        <h1>List Group</h1>
            <ul className="list-group">
               <li className="list-group-item"> List Item</li>
               <li className="list-group-item"> List Item</li>
               <li className="list-group-item"> List Item</li>
               <li className="list-group-item"> List Item</li>
            
            </ul>
        </Fragment> */
    );
}

export default ListGroup;
