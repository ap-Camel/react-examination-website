import React from 'react';
import './teacher.css';
import { useDispatch, useSelector } from 'react-redux';

import useClickedOutside from '../../hooks/useClickedOuside';
import { toogleUpdate } from '../../features/modal/modalSlice';


function ExamEditModal() {

    const dispatch = useDispatch();
    const updateExam = useSelector(store => store.updateExam);

    const [updateExamForm, setUpdateExamForm] = React.useState("");
    // const [checkbox, setCheckbox] = React.useState(false);

    function handleChange(event) {
        const {name, value, type, checked } = event.target;
        if(type === "checkbox") {
            // setCheckbox(checked);
        } else {
            setUpdateExamForm(updateExamForm => {
                return {...updateExamForm, [name]: value};
            })
        }
        
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log(JSON.stringify(updateExamForm));

        const res = await fetch("https://localhost:7276/exam", {
            method: "PUT",
            headers: {
                'accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization': `bearer ${localStorage.getItem("JWT")}`
            },
            body: JSON.stringify(updateExamForm)
        });

        switch(res.status) {
            case 204: 
                alert("exam was updated");
                dispatch(toogleUpdate());
            break;
            case 400:
                const object = (await res.json()).errors;
                const messages = Object.values(object);
                alert(messages);
            break;
            case 401:
                alert("you need to login again");
            break;
            case 500:
                const object2 = (await res.json()).errors;
                const messages2 = Object.values(object2);
                alert(messages2);
            break;
            default:
                alert("respons was" + res.status);
            break;
        }

    }

    let editModal = useClickedOutside(() => {
        dispatch(toogleUpdate());
    })

    React.useEffect(() => {
        setUpdateExamForm(updateExam);
        console.log(updateExam);
    }, [])

    // React.useEffect(() => {
    //     if(!checkbox) {
    //         console.log("im in changing dateToOpen");
    //         setUpdateExamForm(prevUpdateExamForm => {
    //             return {...prevUpdateExamForm, dateToOpen: "0001-01-01T00:00:00"}
    //         })
    //     } else {
    //         console.log("im in setting date");
    //         setUpdateExamForm(prevUpdateExamForm => {
    //             return {...prevUpdateExamForm, dateToOpen: new Date().setMonth(9, 1)}
    //         })
    //     }
    // }, [checkbox])

    if(updateExamForm === "") {
        return (
            <div>

            </div>
        );
    }

    return(
        <aside className="modal-container">
            <div ref={editModal} className='modal'>
                <form className="add-exam-form" onSubmit={handleSubmit}>
                    <label>title</label>
                    <input 
                        name="title"
                        value={updateExamForm.title}
                        onChange={handleChange}
                        placeholder="title"
                        type="text"
                    />
                    <label>number of questions</label>
                    <input 
                        name="numOfQuestions"
                        value={updateExamForm.numOfQuestions}
                        onChange={handleChange}
                        placeholder="10"
                        type="number"
                    />
                    <label>duration (minutes)</label>
                    <input 
                        name="duration"
                        value={updateExamForm.duration}
                        onChange={handleChange}
                        placeholder="30"
                        type="number"
                    />
                    {/* <label>date to open</label>
                    <div className='dateToOpen'>
                        <input 
                        name="duration"
                        value={checkbox}
                        onChange={handleChange}
                        placeholder="30"
                        type="checkbox"
                        />
                        <input 
                        name="duration"
                        value={updateExamForm.duration}
                        onChange={handleChange}
                        placeholder="30"
                        type="number"
                        disabled={!checkbox}
                        />
                    </div> */}
                    <label>passing value (%)</label>
                    <input 
                        name="passingValue"
                        value={updateExamForm.passingValue}
                        onChange={handleChange}
                        placeholder="0"
                        type="number"
                    />
                    <label>number of points</label>
                    <input 
                        name="numOfPoints"
                        value={updateExamForm.numOfPoints}
                        onChange={handleChange}
                        placeholder="0"
                        type="number"
                    />
                    <button>update</button>
                </form>
            </div>
        </aside>
    );
}


export default ExamEditModal;


// public string title {get; init;} = string.Empty;
//         public int numOfQuestions {get; init;}
//         public int duration {get; init;}
//         public DateTime dateToOpen {get; init;}
//         public int passingValue {get; init;}
//         public int numOfPoints {get; init;}
//         public bool active {get; init;}