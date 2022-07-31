import React from "react";
import { useDispatch } from "react-redux";

import { toogleAdd } from '../../../features/modal/modalSlice';

function Heading01({heading}) {

    const dispatch = useDispatch();

    function handleAddButton() {
        dispatch(toogleAdd());
    }

    return(
        <div className="header">
            <label>{heading}</label>
            <button onClick={handleAddButton}>add new</button>
        </div>
    );
}


export default Heading01;