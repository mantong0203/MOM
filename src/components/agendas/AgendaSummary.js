import React from 'react'

const AgendaSummary = ({agenda}) =>{
    return (
        <div className="card z-depth-0 agenda-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{agenda.title}</span>
                    <p>Posted by the </p>
                    <p className="grey-text">3rd September</p>
                </div>
            </div>
    )
}

export default AgendaSummary