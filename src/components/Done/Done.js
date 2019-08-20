import React, { Component } from 'react'
import AgendaListContext from '../../contexts/AgendaListContext';
import { Section } from '../../components/Utils/Utils'
import './Done.css';

export default class Done extends Component {
    static contextType = AgendaListContext;

    render() {
        return (
            <AgendaListContext.Consumer>
                {(context) => (
                    <Section className='container'>
                        <h4 className='AgendaItem_title' id="gold">Title: {this.props.title}</h4>
                        <h5 className='AgendaItem_content' id="gold">Content: {this.props.content}</h5>
                    </Section>
                )}
            </AgendaListContext.Consumer>
        )
    }
}