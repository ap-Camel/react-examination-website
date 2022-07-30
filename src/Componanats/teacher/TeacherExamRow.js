import React from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import './teacher.css'

import { toogleUpdate } from '../../features/modal/modalSlice';
import { setUpdateExam } from "../../features/exam/updateExamSlice";

import ExamEditModal from './ExamEditModal';


function TeacherExamRow({data}) {

    const dispatch = useDispatch();
    console.log(data);

    //const location = useLocation();
    //const [navigateToDetails, setNavigateToDetails] = React.useState(false);

    async function handleDelete() {

        let answer = window.confirm("are you sure you want to delete?");

        if(answer) {
            const res = await fetch(`https://localhost:7276/exam/${data.id}`, {
                method: "DELETE",
                headers: {
                    'accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `bearer ${localStorage.getItem("JWT")}`
                }
            });

            switch(res.status) {
                case 204:
                    alert("exam was deleted successfully");
                break;
                case 400:
                    const object = (await res.json()).errors;
                    const messages = Object.values(object);
                    alert(messages);
                break;
                case 404:
                    alert(res.statusText);
                break;
                case 500:
                    alert("something went wrong, please try again later or contact our support staff");
                break;
                default:
                    alert(`status code: ${res.status}`);
                break;
            }
        }
        
    }

    // function handleSelect() {
    //     setNavigateToDetails(true);
    // }

    return(
        <div className="exam-row">
           {/* {
            navigateToDetails && 
            <Navigate to="./Details/2" state={{from: location}} replace={true} />
           } */}
            <ScrollSyncPane>
                <Link to={`./Details/${data.id}`} className="exam-row-info" replace={false}>
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
                </Link>
            </ScrollSyncPane>
            {/* <div className="exam-row-info" onClick={handleSelect}>
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
            </div> */}
            
            <div className="exam-row-actions">
                <button onClick={() => {
                    console.log("edit clicked")
                    dispatch(setUpdateExam(data));
                    dispatch(toogleUpdate());
                }}>edit</button>
                <button onClick={handleDelete} >delete</button>
            </div>
            
        </div>
    );
}


export default TeacherExamRow;