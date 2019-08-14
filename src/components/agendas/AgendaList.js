import React from 'react'
import AgendaSummary from './AgendaSummary'
import { Link } from 'react-router-dom'
const AgendaList = ({agendas}) =>{
    return (
        <div className="agenda-list section">
            { agendas && agendas.map(agenda => {
              return (
                  
                    <AgendaSummary agenda={agenda} key={agenda.id} />    
                  
              )
            })}
    
        </div>
    )
}

export default AgendaList