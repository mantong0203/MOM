import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
          <div id='landing_message'>
            <h1>WELCOME TO MOM!</h1>
            <p> "As a busy mom, you could manage your day worry free on our app" <br /><br />
            1. Create the agenda, this will put agenda into the Todo list.<br /><br />
            2. Check the task when you are done, this will put all you have accomplished into Done list.
            </p>    
          </div>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
