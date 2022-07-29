import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { toogle } from '../../features/modal/modalSlice';
import { setLogin } from '../../features/user/userSlice';



function AddExamModal() {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const ref = React.useRef(null);

    const [addExam, setAddExam] = React.useState({
        title: "",
        numOfQuestions: 10,
        duration: 60,
        passingValue: 50,
        numOfPoints: 10
    });

    function handleChange(event) {
        setAddExam(addExam => {
            return {...addExam, [event.target.name]: event.target.value}
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(checkInputFields) {
            const res = await fetch("https://localhost:7276/exam", {
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `bearer ${localStorage.getItem("JWT")}`
                },
                body: JSON.stringify(addExam)
            });

            console.log(res.status);
            console.log(JSON.stringify(addExam));

            switch(res.status) {
                case 201:
                    alert("exam has been created");
                    dispatch(toogle());
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
    }

    function checkInputFields() {
        const {title, numOfQuestions, duration, passingValue, numOfPoints} = addExam;
        if(title === "" || numOfQuestions === null || duration === null || passingValue === null || numOfPoints === null) {
            alert("please fill in all of the fields");
            return false;
        }

        return true;
    }

    let modalRef = React.useRef();

    React.useEffect(() => {
        let handler = (event) => {
            if(!modalRef.current.contains(event.target)) {
                dispatch(toogle());
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return(
        <aside className="modal-container">
            <div ref={modalRef} className='modal' onClick={() => {console.log("clicked modal")}}>
                <form className="add-exam-form" onSubmit={handleSubmit}>
                    <label>title</label>
                    <input 
                        name="title"
                        value={addExam.title}
                        onChange={handleChange}
                        placeholder="title"
                        type="text"
                    />
                    <label>number of questions</label>
                    <input 
                        name="numOfQuestions"
                        value={addExam.numOfQuestions}
                        onChange={handleChange}
                        placeholder="10"
                        type="number"
                    />
                    <label>duration (minutes)</label>
                    <input 
                        name="duration"
                        value={addExam.duration}
                        onChange={handleChange}
                        placeholder="30"
                        type="number"
                    />
                    <label>passing value (%)</label>
                    <input 
                        name="passingValue"
                        value={addExam.passingValue}
                        onChange={handleChange}
                        placeholder="0"
                        type="number"
                    />
                    <label>number of points</label>
                    <input 
                        name="numOfPoints"
                        value={addExam.numOfPoints}
                        onChange={handleChange}
                        placeholder="0"
                        type="number"
                    />
                    <button>add</button>
                </form>
            </div>
        </aside>
    );
}



//         public int passRate {get; init;}
//         public int numOfQuestions {get; init;}
//         public int duration {get; init;}
//         public int passingValue {get; init;}
//         public int numOfPoints {get; init;}
//         public bool active {get; init;}


export default AddExamModal;