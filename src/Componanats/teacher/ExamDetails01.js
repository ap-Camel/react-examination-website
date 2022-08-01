import React from "react";
import ComponantB from "../abstracts/heavyComponants/ComponantB";


function ExamDetails01() {

    let urls = {
        get: "https://localhost:7276/examQuestions/",
        getSingle: "https://localhost:7276/exam/examID/",
        post: "https://localhost:7276/exam",
        put: "https://localhost:7276/exam",
        delete: "https://localhost:7276/exam/"
    }

    let defaultShow = [
        "id",
        "question",
        "difficulty", 
        "times used", 
        "times correct", 
        "date Created", 
        "date updated", 
        "date used", 
        "type", 
        "point value", 
        "has image", 
        "image url"
    ];

    let defaultDetails = {
        id: {
            name: "id",
            default: ""
        },
        title: {
            name: "title",
            default: ""
        },
        active: {
            name: "active",
            default: ""
        },
        passingValue: {
            name: "passing value",
            default: 50,
        },
        numOfQuestions: {
            name: "number of questions",
            default: 10,
        },
        duration: {
            name: "duration",
            default: 60,
        },
        numOfPoints: {
            name: "number of points",
            default: 10,
        },
        passRate: {
            name: "passing rate",
            default: "",
        },
    }

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

    let heading = "questions";

    return(
        <ComponantB 
        urls={urls}
        defaultShow={defaultShow}
        defaultAdd={defaultAdd}
        defaultEdit={defaultEdit}
        defaultDetails={defaultDetails}
        heading={heading}
        />
    );
}


export default ExamDetails01;


