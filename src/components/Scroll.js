import React from "react";

const Scroll = (props)=>
{
    return(
        <div style={{overflowY: 'scroll',border: '5px solid', height: '500px', borderColor: 'rgba(3, 90, 68,0.75)', backgroundColor:'rgba(3, 90, 68,0.25)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;