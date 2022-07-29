import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TeacherExamRow from "./TeacherExamRow";
import AddExamModal from './AddExamModal';

import { toogle } from '../../features/modal/modalSlice';

function TeacherExams() {

    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();

    function addButton(event) {
        dispatch(toogle());
    }

    return(
        <div className="wrapper">
            {modal.isOpen && <AddExamModal />}
            <div className="header">
                <label>exams</label>
                <button onClick={addButton}>add new</button>
            </div>
            <div className="main">
                <div className="utilities">
                    <input type="search" />
                    <button className="btn-search">search</button>
                    <button className="btn-filter">filter</button>
                    <select>
                        <option>filter</option>
                        <option>ascending</option>
                        <option>decending</option>
                    </select>
                </div>
                <div className="content">
                    <TeacherExamRow />
                    <TeacherExamRow />
                    <TeacherExamRow />
                    <TeacherExamRow />
                </div>
            </div>
        </div>
    );
}


export default TeacherExams;