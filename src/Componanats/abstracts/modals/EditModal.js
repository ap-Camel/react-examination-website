import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import useClickedOutside from '../../../hooks/useClickedOuside';
import { toogleEdit } from '../../../features/modal/modalSlice';
import UseApi from "../../../hooks/UseApi";


function EditModal({url}) {

    const dispatch = useDispatch();
    const editItem = useSelector(store => store.editModal);

    const [editItemForm, setEditItemForm] = React.useState(editItem.edit);
    const [elements, setElements] = React.useState(Object.keys(editItemForm));

    React.useEffect(() => {
        console.log(editItem);
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        if(checkInputFields()) {
            let temp = {};
            elements.map(key => {
                temp = {...temp, [key]: editItemForm[key].default};
            });
            // console.log(temp);
            temp = {...temp, id: editItem.id};
            await UseApi(url, "PUT", JSON.stringify(temp));
            dispatch(toogleEdit());
        }
    }

    function handleChange(event) {
        const {name, value, type, checked } = event.target;
        setEditItemForm(editItemForm => {
            return {...editItemForm, [name]: {
                name: editItemForm[name].name,
                default: value,
                type: type
            }};
        });
    }

    function checkInputFields() {
        for(const key in editItemForm) {
            if(!editItemForm[key].default) {
                alert("please fill in all of the fields");
                return false;
            }
        }
        return true;
    }

    let editModal = useClickedOutside(() => {
        dispatch(toogleEdit());
    })

    if(!editItemForm) {
        return(
            <div>something went wrong</div>
        );
    }

    return(
        <aside className="modal-container">
            <div ref={editModal} className='modal'>
                <form className="add-exam-form" onSubmit={handleSubmit}>
                    {
                        elements.map(item => {
                            return(
                                <>
                                    <label>{editItemForm[item].name}</label>
                                    <input 
                                    name={item}
                                    value={editItemForm[item].default}
                                    onChange={handleChange}
                                    placeholder={editItemForm[item].name}
                                    type={editItemForm[item].type}
                                    />
                                </>
                                
                            );
                        })
                    }
                    {/* <label>title</label>
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
                    /> */}
                    <button>update</button>
                </form>
            </div>
        </aside>
    );
}



export default EditModal;