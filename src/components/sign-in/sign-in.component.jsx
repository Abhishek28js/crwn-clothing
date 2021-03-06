import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,SignInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
      handleSubmit=async event=>{
          event.preventDefault();
          const{email,password}=this.state;
       
          try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState(
                {
                    email:'',
                    password:''

                }
            )
          }catch(error){
              console.log(error)
          }
      }

      handleChange=event=>{
          const {value,name}=event.target;
          this.setState({[name]:value})
      }

    render(){
        return(
            <div className='sign-in'>
               <h1 className='title'>Already have an account?</h1>
               <span>Sign in with email and password</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required/>
                   <FormInput name='password' type='password' label='password' handleChange={this.handleChange}  value={this.state.password} required/>
                   <div className='buttons'>
                   <CustomButton type='submit'>SIGN IN</CustomButton>
                   <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Google sign in</CustomButton>
                   </div>
         
               </form>
               
            </div>
        )
    }
}
export default SignIn;