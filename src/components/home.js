import React,{useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

function Home(props) {
    const {theme} = useContext(ThemeContext);
    const {isLight, light, dark} = theme;
    const styles = isLight ? light : dark;
    return(
        <p style={styles}>Hello</p>
    )
}

export default Home;