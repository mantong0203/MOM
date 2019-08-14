import TokenService from '../services/token-service'
import config from '../config'

const AgendaApiService = {
  getAgendas() {
    return fetch(`${config.API_ENDPOINT}/agendas`, {
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAgenda(agendaId) {
    return fetch(`${config.API_ENDPOINT}/agendas/${agendaId}`, {
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postAgenda(agendaId, title, content) {
    return fetch(`${config.API_ENDPOINT}/agendas`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        agenda_id: agendaId,
        title,
        content,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
 
}

export default AgendaApiService
