// TodoInput.js
import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');


    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleAddTask = () => {
        if(taskText.trim()) {
            addTask({ text: taskText });
            setTaskText('');
        }
    };  

    return (
        <div className='flex justify-center text-center gap-5 p-5 m-5'>
            <input
                className='Entertask'
                type="text" 
                placeholder="Enter Task" 
                value={taskText}
                onChange={handleInputChange}
            /> 
                    
            <button className='TaskAddBtn' onClick={handleAddTask}>Add Task</button>
        </div>
    );
};  

export default TodoInput;
