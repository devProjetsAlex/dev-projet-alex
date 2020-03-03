import React, { useEffect, useRef } from 'react'
import './Cockpit.css'
import {StyledButton} from './Cockpit.styles'

const cockpit = (props) => {
  
  const toggleBtnRef=useRef(null)
useEffect(() => {
   
toggleBtnRef.current.click()

}, [])


    const classes = [];
     if (props.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
    <div>
        <h1>{props.appTitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton ref={toggleBtnRef} alt={props.showPersons} onClick={props.clicked}>
          Toggle Persons
        </StyledButton>
        <StyledButton onClick={props.login}>Log In </StyledButton>
    </div>
    )
}

export default cockpit