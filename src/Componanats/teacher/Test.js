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
            default: "",
            type: "text"
        },
        numOfQuestions: {
            name: "number of questions",
            default: 10,
            type: "number"
        },
        duration: {
            name: "duration",
            default: 60,
            type: "number"
        },
        passingValue: {
            name: "passing value",
            default: 50,
            type: "number"
        },
        numOfPoints: {
            name: "number of points",
            default: 10,
            type: "number"
        }
    }

    let defaultEdit = {
        title: {
            name: "title",
            default: "",
            type: "text"
        },
        numOfQuestions: {
            name: "number of questions",
            default: 0,
            type: "number"
        },
        duration: {
            name: "duration",
            default: 0,
            type: "number"
        },
        passingValue: {
            name: "passing value",
            default: 0,
            type: "number"
        },
        numOfPoints: {
            name: "number of points",
            default: 0,
            type: "number"
        }
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