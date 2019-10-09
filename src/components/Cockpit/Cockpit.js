import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in UseEffect');
        }
    }, [props.persons])

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.red);
    } else {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}

            <button onClick={authContext.login}>Log In</button>

        </div>
    );
}

export default React.memo(cockpit);