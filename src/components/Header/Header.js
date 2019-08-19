import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import AgendaContext from '../../contexts/AgendaContext'
import './Header.css'

export default class Header extends Component {
  static contextType = AgendaContext

  handleLogoutClick = () => {
    const { logOutUser } = this.context
        logOutUser()
    TokenService.clearAuthToken()
      /* when logging out, clear the callbacks to the refresh api and idle auto logout */
      TokenService.clearCallbackBeforeExpiry()
      IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
      <Link to='/add-agenda' id='link'>
          Add Agenda
      </Link>
      {' '}
      <Link to='/agendas' id='link'>
          Todo
      </Link>
      {' '}
      <Link to='/done' id='link'>
           Done
      </Link>
      {' '}
      <Link
          onClick={this.handleLogoutClick}
          to='/' id='link'>
          Logout
      </Link>
  </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login' id='link'>
          Log in
        </Link>
        <Link
          to='/' id='link'>
          Register
        </Link>
        
      </div>
    )
  }
  componentDidMount() {
    const { logInUser } = this.context
    if (TokenService.hasAuthToken()) {
        logInUser()
    }
}
  render() {
    const { loggedIn } = this.context
    return (
    <>
      <div className='Header'>
        <h1>
          <Link to='/' id='link'>
            <FontAwesomeIcon className='pink' icon='calendar' />
            {' '}
            MOM
          </Link>
        </h1>
        {loggedIn === true
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>

    </>
    )
  }
}
