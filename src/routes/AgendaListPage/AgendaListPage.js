import React, { Component } from 'react'
import AgendaListContext from '../../contexts/AgendaListContext'
import AgendaListItem from '../../components/AgendaListItem/AgendaListItem'


export default class AgendaListPage extends Component {
    static defaultProps = {
        agendaList: []
    };

    static contextType = AgendaListContext;

    componentDidMount() {
        this.context.fetchAgendas()
    }

    render() {
        const { agendaList } = this.context
        const activeAgendas = [];
        agendaList.forEach(agenda => {
            if (agenda.active === true) {
                activeAgendas.push(agenda)
            }
        })
        return (
            <section className='AgendaList'>
                <h2>Todo</h2>
                <ul className='AgendaList_list' aria-live='polite'>

                    {activeAgendas.map(agenda =>
                        <AgendaListItem key={agenda.id} {...agenda} />
                    )}

                </ul>
            </section>
        );
    }
}