import React,{createContext, useState} from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({children}) =>{
    const [task, setTask] = useState([
        {id:1, nameTask:"fix bug", status:"done", user_id_task:1},
        {id:2, nameTask:"feed dog", status:"cancel", user_id_task:2},
        {id:3, nameTask:"fix bug", status:"done", user_id_task:1},
    ])
    const [nameTask, setNameTask] = useState();
    const [statusTask, setStatusTask] = useState();

    const onChangeNameTask = (e)=>{
        setNameTask(e.target.value);
    };

    const onChangeStatusTask = (e)=>{
        setStatusTask(e.target.value);
    };

    const addTask =(user_id)=>{
        const userAddTask = {
            id:task.length+1,
            nameTask:nameTask,
            status: statusTask||"Done",
            user_id_task:user_id,
        }
        setTask([...task, userAddTask]);
    }

    const DeleteTask = (id_task) =>{
        let newArr = task.filter((item) => item.id != id_task);
        setTask(newArr);
    }

    const TaskContextData ={
        task, onChangeNameTask, onChangeStatusTask,addTask,DeleteTask
    }

    

    return(
        <TaskContext.Provider value={TaskContextData}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;
