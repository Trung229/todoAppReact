import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
} from "react-router-dom";


const SignUp = () => {
    const { users } = useContext(UserContext);
    const {  allow,onChangeEmail, onChangePassword, onSubmit, validateEmail, validatePassword, OnSignUp } = useContext(UserContext);
    let history = useHistory();
    return (
        <Router>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control isInvalid={validateEmail.isValid ? false : true} onChange={(e) => onChangeEmail(e)} placeholder="Enter email" />
                    <Form.Text className="text-danger">
                        {validateEmail.message}
                    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => onChangePassword(e)} type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                        {validatePassword.message}
                    </Form.Text>
            </Form.Group>
            
            <Link className="btn btn-primary"  to={allow.isAccess?history.push(`/main/${allow.token.id}`):"/sign-up"} onClick={() => OnSignUp()} variant="primary" style={{ marginRight: 10 }}>Log In</Link>
        </Form>
        </Router>
    )
}

export default SignUp;