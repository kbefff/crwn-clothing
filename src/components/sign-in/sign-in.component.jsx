import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

// we are going to use a class component because we have to store what the user is typing in


class SignIn extends React.Component {
    constructor(props) {
        // we need access to state
        super(props);

        // in state we are going to store

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    };

    handleChange = event => {
        // we get name and value from our input value
        const {value, name} = event.target;
        //dynamically set state --> if name is password it will say 
        //password and use the value etc
        //this way we can pass the same function into different inputs
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
            {/* on submit function tht calls our method handle submit which for now will prevent default submit action */}
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label ='email'
                        required />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required />
                <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    {/* isGoogleSignIn for Google button styling */}
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        Sign in with Google
                    </CustomButton>

                </div>

                </form>
            </div>  
            // native form element
        );
    };
};

export default SignIn;