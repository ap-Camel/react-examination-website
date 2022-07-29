import React from "react";
import './teacher.css'


function TeacherExamRow() {
    return(
        <div className="exam-row">
            <div className="exam-row-info">
                <label>title</label>
                <label>0</label>
                <label>10</label>
                <label>50</label>
                <label>1</label>
            </div>
            <div className="exam-row-actions">
                <button>edit</button>
                <button>delete</button>
            </div>
            
        </div>
    );
}


export default TeacherExamRow;