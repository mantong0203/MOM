import React, { Component } from 'react'

export const nullAgenda = {
  user: {},
  tags: [],
}

const AgendaContext = React.createContext({
  agenda: nullAgenda,
  loggedIn: false,
  error: null,
  setError: () => {},
  clearError: () => { },
  setAgenda: () => {},
  clearAgenda: () => {},
  updateAgenda: () => { },
})

export default AgendaContext

export class AgendaProvider extends Component {
  state = {
    agenda: nullAgenda,
    loggedIn: false,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setAgenda = agenda => {
    this.setState({ agenda })
  }

  clearAgenda = () => {
    this.setAgenda(nullAgenda)
  }
  logInUser = () => {
    this.setState({ loggedIn: true })
  }

  logOutUser = () => {
    this.setState({ loggedIn: false })
  }

  render() {
    const value = {
      agenda: this.state.agenda,
      loggedIn: this.state.loggedIn,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAgenda: this.setAgenda,
      clearAgenda: this.clearAgenda,
      logInUser: this.logInUser,
      logOutUser: this.logOutUser,
    }
    return (
      <AgendaContext.Provider value={value}>
        {this.props.children}
      </AgendaContext.Provider>
    )
  }
}
