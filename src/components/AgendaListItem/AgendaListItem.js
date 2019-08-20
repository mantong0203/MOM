import React, { Component } from 'react'
import config from '../../config';
import AgendaListContext from '../../contexts/AgendaListContext';
import TokenService from '../../services/token-service';
import './AgendaListItem.css'


export default class AgendaItem extends Component {
    static contextType = AgendaListContext;

    parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };


    updateAgendaActive = (agenda) => {
        //let parsedJwtToken = this.parseJwt(localStorage.getItem(config.JWT_TOKEN))

        fetch(`${config.API_ENDPOINT}/agendas/${agenda.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ active: false }),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error))

            })
            .then(data => {
                this.context.updateAgenda(agenda.id, 'active', false)
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <AgendaListContext.Consumer>
                {(context) => (

                    <div className='AgendaItem'>
                         <div className='TradeItem_middle'>
                               
                                <button type='Button' id='Accept' onClick={() => this.updateAgendaActive(this.props)}><span>Check</span></button>
                         </div>
                        <h4 className='AgendaItem_title'>Title: {this.props.title}</h4>

                        <h5 className='AgendaItem_content'>Content: {this.props.content}</h5>
                    </div>
                )}
            </AgendaListContext.Consumer>
        )
    }
}