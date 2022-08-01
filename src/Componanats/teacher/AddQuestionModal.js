import React from "react";

function AddQuestionModal() {

    function handleSubmit(event) {
        event.preventDefault();

        
    }


    return(
        <div>
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
        </div>
    );
}


export default AddQuestionModal;