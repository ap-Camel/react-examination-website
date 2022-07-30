import React from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import { useDispatch, useSelector } from "react-redux";
import './teacher.css'

import { toogleUpdate } from '../../features/modal/modalSlice';
import { setUpdateExam } from "../../features/exam/updateExamSlice";

import ExamEditModal from './ExamEditModal';


function TeacherExamRow({data}) {

    const dispatch = useDispatch();
    console.log(data);

    return(
        <div className="exam-row">
           
            <ScrollSyncPane>
            <div className="exam-row-info">
                <p className="odd">{data.title}</p>
                <p className="even">{data.active.toString()}</p>
                <p className="odd">{data.passingValue}</p>
                <p className="even">{data.numOfQuestions}</p>
                <p className="odd">{data.duration}</p>
                <p className="even">{data.dateToOpen}</p>
                <p className="odd">{data.numOfPoints}</p>
                <p className="even">{data.passRate}</p>
                <p className="odd">{data.timesUsed}</p>
                <p className="even">{(new Date(data.dateCreated)).toLocaleDateString()}</p>
                <p className="odd">{(new Date(data.dateUpdated)).toLocaleDateString()}</p>
            </div>
            </ScrollSyncPane>
            <div className="exam-row-actions">
                <button onClick={() => {
                    console.log("edit clicked")
                    dispatch(setUpdateExam(data));
                    dispatch(toogleUpdate());
                }}>edit</button>
                <button>delete</button>
            </div>
            
        </div>
    );
}


export default TeacherExamRow;