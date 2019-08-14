import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

class SignUp extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    state = {
        error: null,
        user_name:'',
        password:'',
        fullName:'',
        nickName:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, nick_name, user_name, password } = ev.target
    
        this.setState({ error: null })
        AuthApiService.postUser({
        user_name: user_name.value,
        password: password.value,
        full_name: full_name.value,
        nickname: nick_name.value,
         })
           .then(user => {
              full_name.value = ''
              nick_name.value = ''
              user_name.value = ''
              password.value = ''
              this.props.onRegistrationSuccess()
            })
            .catch(res => {
              this.setState({ error: res.error })
            })
      }
    
    render() {
        const { error } = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <div role='alert'>
                  {error && <p className='red'>{error}</p>}
                </div>
                <h5 className="grey-text text-darken-3">Sign up</h5>
                <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input name='full_name' type="text" id="fullName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="user_name">User Name</label>
                    <input type="text" id="user_name" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="nickName">Nickname</label>
                    <input name='nick_name' type="text" id="nickName" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
                </div>
                </form>
            </div>
        )
    }
}

export default SignUp
