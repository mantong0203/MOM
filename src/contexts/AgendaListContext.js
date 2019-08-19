import React, { Component } from 'react'
import config from '../config'
import TokenService from '../services/token-service'

const AgendaListContext = React.createContext({
  agendaList: [],
  error: null,
  addAgenda: () => { },
  deleteAgenda: () => { },
  updateAgenda: () => { },
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
  addAgenda = agenda => {
    this.setState({
        agendaList: [...this.state.agendaList, agenda],
    })
}

  deleteAgenda = agendaId => {
      const newAgendaList = this.state.agendaList.map(agenda => {
          if (agenda.id !== agendaId) {
              return agenda
          } else {
              return agendaId
          }
      })
      this.setState({
          agendaList: newAgendaList
      })
  }

  updateAgenda = (agendaId, key, value) => {
    const newAgendaList = this.state.agendaList.map(agenda => {
        if (agenda.id === agendaId) {
            agenda[key] = value
        }
        return agenda
    })
    console.log(agendaId)
    console.log('New agenda list', newAgendaList)
    this.setState({
        agendaList: newAgendaList
    })
}

  fetchAgendas() {
      fetch(`${config.API_ENDPOINT}/agendas`, {
          method: 'GET',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`
          }
      })
          .then(res => {
              if (!res.ok) {
                  alert('Must Log In')
                  throw new Error(res.status)
              }
              return res.json()
          })
          .then(this.setAgendaList)
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
      addAgenda: this.addAgenda,
      deleteAgenda: this.deleteAgenda,
      updateAgenda: this.updateAgenda,
      setError: this.setError,
      clearError: this.clearError,
      setAgendaList: this.setAgendaList,
      fetchAgendas: this.fetchAgendas,
    }
    return (
      <AgendaListContext.Provider value={value}>
        {this.props.children}
      </AgendaListContext.Provider>
    )
  }
}
