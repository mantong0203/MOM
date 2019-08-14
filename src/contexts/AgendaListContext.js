import React, { Component } from 'react'

const AgendaListContext = React.createContext({
  agendaList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAgendaList: () => {},
})
export default AgendaListContext

export class AgendaListProvider extends Component {
  state = {
    agendaList: [],
    error: null,
  };

  setAgendaList = agendaList => {
    this.setState({ agendaList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      agendaList: this.state.agendaList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAgendaList: this.setAgendaList,
    }
    return (
      <AgendaListContext.Provider value={value}>
        {this.props.children}
      </AgendaListContext.Provider>
    )
  }
}
