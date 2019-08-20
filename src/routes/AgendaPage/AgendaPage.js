import React, { Component } from 'react'
import AgendaListContext from '../../contexts/AgendaListContext'
import Done from '../../components/Done/Done'
import { Section } from '../../components/Utils/Utils';


export default class AgendaPage extends Component {
    static contextType = AgendaListContext;

    componentDidMount() {
        this.context.fetchAgendas()
    }

    render() {
        const { agendaList } = this.context
        //let parsedJwtPayload = TokenService.parseJwt(localStorage.getItem(config.JWT_TOKEN))
        const acceptedAgendas = []

        agendaList.forEach(agenda => {
            if ( agenda.active === false) {
                acceptedAgendas.push(agenda)
            }
        })

        return (
            <Section className='container'>
                <h2>Agendas:</h2>
                
                <ul className='AgendaList_list' aria-live='polite'>
                    {acceptedAgendas.map(agenda =>
                        <Done key={agenda.id} {...agenda} />
                        
                    )}
                </ul>
            </Section>
        )
    }
}
