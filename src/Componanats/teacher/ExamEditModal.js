import React from 'react';
import './teacher.css';
import { useDispatch, useSelector } from 'react-redux';

import useClickedOutside from '../../hooks/useClickedOuside';
import { toogleUpdate } from '../../features/modal/modalSlice';


function ExamEditModal() {

    const dispatch = useDispatch();
    const updateExam = useSelector(store => store.updateExam);

    const [updateExamForm, setUpdateExamForm] = React.useState("");

    function handleChange(event) {
        setUpdateExamForm(updateExam => {
            return {...updateExam, [event.target.name]: event.target.value};
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();

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
                    <label>duration (minutes)</label>
                    <div>
                        <input 
                        name="duration"
                        value={updateExamForm.duration}
                        onChange={handleChange}
                        placeholder="30"
                        type="number"
                        />
                        <input 
                        name="duration"
                        value={updateExamForm.duration}
                        onChange={handleChange}
                        placeholder="30"
                        type="number"
                    />
                    </div>
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