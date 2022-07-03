import { useState } from "react";
import { AppContext } from '../context/AppContext';
import {useContext} from 'react';

const Display = ({num}) => {
    const {budget} = useContext(AppContext);
    return(<>
     <div class="output">
     
                <div class="cur-operdan">
                        <h1>{budget}</h1>
                </div>
            </div></>)
}

export default Display;