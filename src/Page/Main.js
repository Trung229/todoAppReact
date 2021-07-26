import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { TaskContext } from '../contexts/TaskContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
} from "react-router-dom";

const Main = () => {
    const { task, onChangeNameTask, onChangeStatusTask, addTask,DeleteTask } = useContext(TaskContext);
    const { user_id } = useParams();
    const taskUser = task.filter((item) => item.user_id_task == user_id);
    let i = 1;
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Add Task</Form.Label>
                <Form.Control onChange={(e)=>onChangeNameTask(e)} type="text" placeholder="Enter Task" />
            </Form.Group>
            <select onChange={(e)=>onChangeStatusTask(e)} className="mb-3" aria-label="Default select example">
                <option value="Done">Done</option>
                <option value="not done">not done</option>
                <option value="cancel">cancel</option>
            </select>
            <br/>
            <Button onClick={()=> addTask(user_id)} style={{ marginBottom: 10 }} variant="outline-success">Add Task</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskUser.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{i++}</td>
                                    <td>{item.nameTask}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Button style={{ marginRight: 10 }} variant="outline-primary">Edit</Button>
                                        <Button variant="outline-danger" onClick={()=>{DeleteTask(item.id)}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Main;