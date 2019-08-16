import React from 'react'
import AgendaSummary from './AgendaSummary'
import { Link } from 'react-router-dom'

const AgendaList = ({agendas}) =>{
    return (
        <div className="agenda-list section">
            { agendas && agendas.map(agenda => {
              return (
                <Link to={'/agenda/' + agenda.id} key={agenda.id}>
                    <AgendaSummary agenda={agenda}  />    
                 </Link>
              )
            })}
    
        </div>
    )
}

export default AgendaList