import React, { useState } from 'react'

function Tasks() {
    const [Task, setTask] = useState([
        {id: 1, name:"React Course", completed: true},
        {id: 2, name:"Go to market", completed: false},
        {id: 3, name:"Prepare Dinner", completed: false},
        {id: 4, name:"Read a Book", completed: false}
    ])
    console.log(Task);
    
    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {Task.map((task_arr)=>{
                    return(
                        <li key={task_arr.id}>
                            {task_arr.name} - {task_arr.completed ? "Done":"Not Done"}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks