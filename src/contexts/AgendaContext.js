import React, { Component } from 'react'

export const nullAgenda = {
  author: {},
  tags: [],
}

const AgendaContext = React.createContext({
  agenda: nullAgenda,
  error: null,
  setError: () => {},
  clearError: () => { },
  setAgenda: () => {},
  clearAgenda: () => {},
})

export default AgendaContext

export class AgendaProvider extends Component {
  state = {
    agenda: nullAgenda,
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

  render() {
    const value = {
      agenda: this.state.agenda,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAgenda: this.setAgenda,
      
      clearAgenda: this.clearAgenda,
     
    }
    return (
      <AgendaContext.Provider value={value}>
        {this.props.children}
      </AgendaContext.Provider>
    )
  }
}
