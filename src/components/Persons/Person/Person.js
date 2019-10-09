import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // can be used in class based components
    // gives you access to this.context
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus(); 
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {/* provide a function that accepts context as an argument
                get that argument by the authContext,
                React executes function for us,
                JSX has access to context object*/}
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}

                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                {/* <input type="text" ref={(inputEl) => { this.inputElement = inputEl }} onChange={this.props.changed} value={this.props.name}></input> */}
                <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )
    }

};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);