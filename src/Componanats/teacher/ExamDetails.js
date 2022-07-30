import React from "react";
import { useParams } from 'react-router-dom';

import SearchButton from "../shared/SearchButoon";

function ExamDetails() {

    const {id} = useParams();

    const [questions, setQuestions] = React.useState("");


    React.useEffect(() => {
        async function getData() {
            const res = await fetch(`https://localhost:7276/questions/getQuestions/1`,{
                headers: {
                    'accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `bearer ${localStorage.getItem("JWT")}`
                }
            });

           // console.log(res.status);
            console.log("im inside useEffect");

            switch(res.status) {
                case 200:
                    //setQuestions(await res.json());
                    console.log(await res.json());
                break;
                case 400:
                    const object = (await res.json()).errors;
                    const messages = Object.values(object);
                    alert(messages);
                break;
                case 404:
                    alert("no questions were found");
                break;
                case 401:
                    alert("you need to login again");
                    window.location.reload(false);
                break;
                case 500:
                    alert("something went wrong, please try again laster");
                break;
                default:
                    alert(`status code: ${res.status}`);
                break;
            }
        }

        if(questions === "") {
            getData();
        }
    }, [])

    return(
        <div className="wrapper">
            <div className="exam-info">
                exam info
            </div>
            <div className="wrapper">
                <div className="header">
                    questions and add
                </div>
                <div className="utilities">
                    <SearchButton />
                </div>
                <div className="main">
                    <div>{id}</div>
                    <div>question</div>
                    <div>question</div>
                    <div>question</div>
                </div>
            </div>
        </div>
    );
}


export default ExamDetails;