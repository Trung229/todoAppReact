import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function ToggleButton(props) {
    const {changeTheme} = useContext(ThemeContext);
    return(
        <Button onClick={()=>changeTheme()} variant="primary" className="mr-2">Primary</Button>
    )
}

export default ToggleButton;