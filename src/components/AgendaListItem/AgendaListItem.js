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
        let parsedJwtToken = this.parseJwt(localStorage.getItem(config.JWT_TOKEN))

        fetch(`${config.API_ENDPOINT}/agendas/${agenda.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ active: false, claim_user: parsedJwtToken.user_id }),
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
                        <h2 className='AgendaItem_title'>{this.props.title}</h2>
                        <h3 className='AgendaItem_content'>{this.props.content}</h3>
                    </div>
                )}
            </AgendaListContext.Consumer>
        )
    }
}