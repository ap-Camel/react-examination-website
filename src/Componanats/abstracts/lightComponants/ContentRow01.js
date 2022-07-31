import React from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { toogleUpdate } from '../../../features/modal/modalSlice';
import { setUpdateExam } from "../../../features/exam/updateExamSlice";


function ContentRow01({item, urls}) {

    const dispatch = useDispatch();

    const keys = Object.keys(item);

    let row = [];
    let index = 0;
    for(const key in item) {
        row.push(
            <p className={ index % 2 === 0 ? "odd" : "even" }>{item[key]}</p>
        )
        index += 1;
    }

    async function handleDelete() {

        let answer = window.confirm("are you sure you want to delete?");

        if(answer) {
            const res = await fetch(`${urls.delete}${item.id}`, {
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




    return(
        <div className="exam-row">
            <ScrollSyncPane>
                <Link to={`./details/${item.id}`} className="exam-row-info" replace={false}>
                    {
                        row.map(item => item)                      
                    }
                </Link>
            </ScrollSyncPane>
            <div className="exam-row-actions">
                <button onClick={() => {}}>edit</button>
                <button >delete</button>
            </div>
            {/* <ScrollSyncPane>
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
            <div className="exam-row-actions">
                <button onClick={() => {
                    console.log("edit clicked")
                    dispatch(setUpdateExam(data));
                    dispatch(toogleUpdate());
                }}>edit</button>
                <button onClick={handleDelete} >delete</button>
            </div> */}
        </div>
    );
}


export default ContentRow01;