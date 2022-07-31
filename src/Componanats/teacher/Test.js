import React from "react";
import ComponantA from "../abstracts/heavyComponants/ComponantA";

function Test() {

    let urls = {
        get: "https://localhost:7276/exam/numberOfExams/10",
        post: "https://localhost:7276/exam",
        put: "https://localhost:7276/exam",
        delete: "https://localhost:7276/exam/"
    }

    let defaultShow = [
        "id",
        "title",
        "active", 
        "passing value", 
        "num of questions", 
        "duration", 
        "date to open", 
        "num of points", 
        "passing rate", 
        "times used", 
        "date created", 
        "date updated"
    ];

    let defaultAdd = {
        title: {
            name: "title",
            default: "k",
            type: "text"
        },
        numOfQuestions: {
            name: "number of questions",
            default: 10,
            type: "text"
        },
        duration: {
            name: "duration",
            default: 60,
            type: "text"
        },
        passingValue: {
            name: "passing value",
            default: 50,
            type: "text"
        },
        numOfPoints: {
            name: "number of points",
            default: 10,
            type: "text"
        }
    }

    let defaultEdit = {
        title: "",
        numOfQuestions: "",
        duration: "",
        passingValue: "",
        numOfPoints: ""
    }

    return(
        <div>
            <ComponantA 
                urls={urls}
                defaultShow={defaultShow}
                defaultAdd={defaultAdd}
                defaultEdit={defaultEdit}
            />
        </div>
    );
}


export default Test;