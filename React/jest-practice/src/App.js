import logo from './logo.svg';
import './App.css';

import React  from  'react';
 class   Login   extends   React.Component  {
    state = {
            email: '',
            password: '',
            loginMessage: '',
        }
     handleInputChange  = (event) => {
         this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleButtonClick = () => {
        const loginMessage = "You're now logged into the account " + this.state.email + "!";
         this.setState({ loginMessage })
    }
    render() {
         return  (
        <div>
            <h2 className='firstHeading'>Login Form</h2>
            <form className='login'>
                <label forHtml="email">Email</label>
                <input id='email' onBlur={ this.handleInputChange} name='email' type='text'/>
                <label className='passwordLabel'>Password</label>
                <input id='password' onBlur={ this.handleInputChange} name='password' type='password' />
                <button className="outlined-default" onClick={this.handleButtonClick}>Submit</button>
            </form>
        <div id='loginMessage'>
            <h2 className='message'>{this.state.loginMessage}</h2>
        </div>
        </div>

        )
    }
}
 export   default  Login


