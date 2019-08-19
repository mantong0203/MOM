import React, { Component } from 'react'
import AgendaListContext from '../../contexts/AgendaListContext'
import Done from '../../components/Done/Done'
import TokenService from '../../services/token-service'
import config from '../../config'


export default class AgendaPage extends Component {
    static contextType = AgendaListContext;

    componentDidMount() {
        this.context.fetchAgendas()
    }

    render() {
        const { agendaList } = this.context
        let parsedJwtPayload = TokenService.parseJwt(localStorage.getItem(config.JWT_TOKEN))
        const acceptedAgendas = []

        agendaList.forEach(agenda => {
            if (agenda.claim_user === parsedJwtPayload.user_id && agenda.active === false) {
                acceptedAgendas.push(agenda)
            }
        })

        return (
            <section className='AgendaList'>
                <h2>Agendas</h2>
                <ul className='AgendaList_list' aria-live='polite'>
                    {acceptedAgendas.map(agenda =>
                        <Done key={agenda.id} {...agenda} />
                    )}
                </ul>
            </section>
        )
    }
}
