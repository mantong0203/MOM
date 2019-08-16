import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service';

class SignIn extends Component {
    state = {
        user_name:'',
        password:''

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value

        })
    }
    
    handleSubmitJwtAuth = ev => {
        //console.log(ev.target)
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
     
        AuthApiService.postLogin({
            
          user_name: this.state.user_name,
          password: this.state.password,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmitJwtAuth} >
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="user_name">User Name</label>
                    <input name='user_name' type="text" id="user_name" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input name='password' type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <button className="btn pink lighten-1 z-depth-0">LOGIN</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn
