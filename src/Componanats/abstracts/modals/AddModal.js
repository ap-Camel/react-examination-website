import React from "react";
import { useDispatch } from "react-redux";

import useClickedOutside from "../../../hooks/useClickedOuside";
import { toogleAdd } from '../../../features/modal/modalSlice';
import UseApi from "../../../hooks/UseApi";

function AddModal({defaultAdd, url}) {

    const dispatch = useDispatch();

    const [addItem, setAddItem] = React.useState(defaultAdd);
    //const [row, setRow] = React.useState(Object.keys(addItem));
    const [elements, setElements] = React.useState(Object.keys(addItem));

    // React.useEffect(() => {
    //     // setRow((prevRow) => {
    //     //     let temp = [];
    //     //     for(const key in addItem) {
    //     //         temp.push(
    //     //             <input 
    //     //             name={addItem[key].name}
    //     //             value={addItem[key].default}
    //     //             onChange={handleChange}
    //     //             placeholder="title"
    //     //             type="text"
    //     //             />
    //     //         )
    //     //     }
    //     //     return temp;
    //     // });
    //     // setHasData(true);
    // }, [])

    // const [addItem, setAddItem] = React.useState(() => {
    //     let temp = {}
    //     for(const key in defaultAdd){
    //         temp = {... temp, [key]: defaultAdd[key].default}
    //     }
    //     return temp;
    // });
    
    // React.useEffect(() => {

    //     setRow([]);
    //     for(const key in addItem) {
    //         let temp;
    //         if(defaultAdd[key].type === "text") {

    //             temp = (
    //                 <>
    //                 <label>{defaultAdd[key].name}</label>
    //                 <input 
    //                 name={key}
    //                 value={addItem[key].default}
    //                 onChange={handleChange}
    //                 placeholder={defaultAdd[key].name}
    //                 type={defaultAdd[key].type}
    //                 />
    //                 </>
    //             );
    //         }else {
    //             temp = <p>hello</p>
    //         }
    //         setRow(prevRow => {
    //             prevRow.push(temp);
    //             return prevRow;
    //         })
    //     }
    //     //console.log(row);
    //     //
    // }, []); 
   

    function handleChange(event) {
        const {name, value, type, checked } = event.target;
        setAddItem(addItem => {
            return {...addItem, [name]: {
                name: addItem[name].name,
                default: value,
                type: type
            }};
        });
        
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if(checkInputFields()) {
            let temp = {};
            elements.map(key => {
                temp = {...temp, [key]: addItem[key].default}
            });
            console.log(temp);
            await UseApi(url, "POST", JSON.stringify(temp), null);
        }
    }

    function checkInputFields() {
        for(const key in addItem) {
            if(!addItem[key].default) {
                alert("please fill in all of the fields");
                return false;
            }
        }
        return true;
    }

    let modalRef = useClickedOutside(() => {
        dispatch(toogleAdd());
    });
    
    if(addItem === "") {
        return(
            <div>something is not right</div>
        );
    }

    return(
        <aside className="modal-container">
            <div ref={modalRef} className='modal' onClick={() => {console.log("clicked modal")}}>
                <form className="add-exam-form" onSubmit={handleSubmit}>
                    {
                        elements.map(item => {
                            return(
                                <>
                                    <label>{addItem[item].name}</label>
                                    <input 
                                    name={item}
                                    value={addItem[item].default}
                                    onChange={handleChange}
                                    placeholder={defaultAdd[item].name}
                                    type={defaultAdd[item].type}
                                    />
                                </>
                                
                            );
                        })
                    }
                    {/* <label>title</label>
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
                    /> */}
                    <button>add</button>
                </form>
            </div>
        </aside>
    );
}



export default AddModal;