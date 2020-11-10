import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import './SignUp.scss';


class SignUp extends Component {
   constructor() {
      super();
      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   };


   //**************** Functions ****************//
   handleChange = e => {
      const { name, value } = e.target;

      this.setState({ [name]: value });
   };

   handleSubmit = async e => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
         alert('Password and Confirmed Password do not match!');
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);
         createUserProfileDocument(user, { displayName });
         this.setState({

            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         });

      } catch (error) {
         console.error(error);
      }

   };






   render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
         <div className='sign-up'>
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit} className='sign-up-form'>
               <FormInput
                  name='displayName'
                  type='text'
                  handleChange={this.handleChange}
                  value={displayName}
                  label='Display Name'
                  required
               />

               <FormInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={email}
                  label='Email'
                  required
               />

               <FormInput
                  name='password'
                  type='password'
                  value={password}
                  handleChange={this.handleChange}
                  label='Password'
                  required
               />

               <FormInput
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  handleChange={this.handleChange}
                  label='Confirm Password'
                  required
               />
               <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
         </div>
      );
   };
};

export default SignUp;