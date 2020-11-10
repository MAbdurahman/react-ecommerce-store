import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import './SignIn.scss';

class SignIn extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      };
   };
   //**************** Functions ****************//
   handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({
            email: '',
            password: ''
         });

      } catch (error) {
         console.error(error);
      }

   };

   handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='Email'
                  required
               />
               <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='Password'
                  required
               />
               <div className="buttons">
                  <CustomButton type='submit'> Sign in </CustomButton>
                  <CustomButton
                     type='button'
                     onClick={signInWithGoogle}
                     isGoogleSignIn> Sign in with Google </CustomButton>
               </div>
            </form>
         </div>
      );
   };
};

export default SignIn;