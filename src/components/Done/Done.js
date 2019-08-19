import React, { Component } from 'react'
import AgendaListContext from '../../contexts/AgendaListContext';
import './Done.css';

export default class Done extends Component {
    static contextType = AgendaListContext;

    render() {
        return (
            <AgendaListContext.Consumer>
                {(context) => (
                    <div className='AgendaItem'>
                        <h2 className='AgendaItem_title' id="gold">{this.props.title}</h2>
                        <h3 className='AgendaItem_content' id="gold">{this.props.content}</h3>
                    </div>
                )}
            </AgendaListContext.Consumer>
        )
    }
}