import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TeacherExamRow from "./TeacherExamRow";
import AddExamModal from './AddExamModal';
import SearchButton from "../shared/SearchButoon";
import ExamEditModal from "./ExamEditModal";

import { toogle } from '../../features/modal/modalSlice';
import { setLogin } from '../../features/user/userSlice';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

function TeacherExams() {

    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();

    const [exams, setExams] = React.useState("");

    function addButton(event) {
        dispatch(toogle());
    }

    React.useEffect(() => {
        async function getExams() {
            const res = await fetch("https://localhost:7276/exam/numberOfExams/10", {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `bearer ${localStorage.getItem("JWT")}`
                }
            });

            switch(res.status) {
                case 200:
                    setExams(await res.json());
                break;
                case 400:
                    const object = (await res.json()).errors;
                    const messages = Object.values(object);
                    alert(messages);
                break;
                case 401:
                    alert("you need to sign in again");
                    // dispatch(setLogin(false));
                break;
                case 500:
                    alert("something went wrong, please try again later or contact our support staff");
                break;
            }
        }
        getExams();
    }, []);

    if(exams === "") {
        return (
            <div></div>
        );
    }

    return(
        <div className="wrapper">
            {modal.addIsOpen && <AddExamModal />}
            {modal.updateIsOpen && <ExamEditModal />}
            <div className="header">
                <label>exams</label>
                <button onClick={addButton}>add new</button>
            </div>
            <div className="main">
                <div className="utilities">
                    <SearchButton  placeholder="exams" data={exams} />
                    <select>
                        <option>filter</option>
                        <option>ascending</option>
                        <option>decending</option>
                    </select>
                </div>
                <ScrollSync>
                    <div className="content">
                        <div className="exam-row">
                            <ScrollSyncPane>
                                <div className="exam-row-info">
                                    <p className="odd">title</p>
                                    <p className="even">active</p>
                                    <p className="odd">passing value</p>
                                    <p className="even">num of questions</p>
                                    <p className="odd">duration</p>
                                    <p className="even">date to open</p>
                                    <p className="odd">num of points</p>
                                    <p className="even">passing rate</p>
                                    <p className="odd">times used</p>
                                    <p className="even">date created</p>
                                    <p className="odd">date updated</p>
                                </div>
                            </ScrollSyncPane>
                            
                            <div className="exam-row-actions">
                                <p>actions</p>
                            </div>
                        </div>
                        {exams !== "" && exams.map((item,index) => {
                            return(
                                <TeacherExamRow data={item} key={item.ID}/>
                            );
                        })}
                    </div>
                </ScrollSync>
            </div>
        </div>
    );
}


export default TeacherExams;