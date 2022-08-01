import React from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { toogleEdit } from '../../../features/modal/modalSlice';
import { setEditModal } from "../../../features/modal/editModalSlice";
import UseApi from "../../../hooks/UseApi";


function ContentRow01({item, urls, defaultEdit}) {

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

            await UseApi(`${urls.delete}${item.id}`, "DELETE", null, null);

            // const res = await fetch(`${urls.delete}${item.id}`, {
            //     method: "DELETE",
            //     headers: {
            //         'accept': 'application/json',
            //         'Content-Type':'application/json',
            //         'Authorization': `bearer ${localStorage.getItem("JWT")}`
            //     }
            // });

            // switch(res.status) {
            //     case 204:
            //         alert("exam was deleted successfully");
            //     break;
            //     case 400:
            //         const object = (await res.json()).errors;
            //         const messages = Object.values(object);
            //         alert(messages);
            //     break;
            //     case 404:
            //         alert(res.statusText);
            //     break;
            //     case 500:
            //         alert("something went wrong, please try again later or contact our support staff");
            //     break;
            //     default:
            //         alert(`status code: ${res.status}`);
            //     break;
            // }
        }   
    }

    function handleEdit() {

        let temp = {};
        for(const key in defaultEdit) {
            temp = {...temp, [key]: {
                name: defaultEdit[key].name,
                default: item[key],
                type: defaultEdit[key].type
            }} 
        }

        temp = {
            edit: temp,
            id: item.id
        }

        console.log(temp);
        dispatch(setEditModal(temp));
        dispatch(toogleEdit());
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
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete} >delete</button>
            </div>
            {/*
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