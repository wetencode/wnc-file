import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import App from "./App";
import { Loada } from "./load";

 export const Temppplate = ()=>{

    const [a, b] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            b(true);
        }, 4000);
    }, []);

    const kungfu_panda = createPortal(<div><App /></div>, document.querySelector('.templat____e___mnfgtyuiolkmnBVFGHJKHGFTGHJhgfyujk'));

    return(<>
        { !a ? <Loada /> : kungfu_panda }
    </>)
};