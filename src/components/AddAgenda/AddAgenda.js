import React, { Component } from 'react';
import { Section, Button } from '../../components/Utils/Utils';
import AgendaListContext from '../../contexts/AgendaListContext'
import TokenService from '../../services/token-service';
import AgendaApiService from '../../services/agenda-api-service'
import config from '../../config';
import './AddAgenda.css'

const Required = () => (
    <span className='AddAgenda_required'>*</span>
)

export default class AddAgenda extends Component {
    static contextType = AgendaListContext;

    state = {
        title: '',
        content:'',
        error: null,
    };

    handleSubmit = e => {
        e.preventDefault()

        let parsedJwtPayload = TokenService.parseJwt(localStorage.getItem(config.JWT_TOKEN))
        if (parsedJwtPayload !=="undefined"){
        const agenda = {
            title: this.state.title,
            content: this.state.content,
            user_id: parsedJwtPayload.user_id,
        }

        this.setState({ error: null })

        AgendaApiService.postAgenda(agenda)
            .then(data => {
                this.setState({
                    title: '',
                    content:'',
                })
                this.context.addAgenda(data)
                this.props.history.push('/agendas')
            })
            .catch(error => {
                console.log(error)
                this.setState({ error })
            })
    }}

    handleTitleChange = (ev) => {
        // console.log(ev.target.value)
        this.setState({ title: ev.target.value })
    }

    handleContentChange = (ev) => {
        this.setState({ content: ev.target.value })
    }

    handleClickCancel = () => {
        this.props.history.push('/agendas')
    };

    render() {
        const { error } = this.state

        return (
            <Section className='container'>
                <h2>Create agenda</h2>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className='AddAgenda__error' role='alert'>
                        {error && <p>{error.message}</p>}
                    </div>
                    <div className='row'>
                        <div className="col-25">
                            <label htmlFor='title'>
                                Title
                            {' '}
                                <Required />
                            </label>
                        </div>
                        <div className="col-75">
                            <input
                                type='text'
                                name='title'
                                className='In-st'
                                id='title'
                                placeholder="Pick up kids"
                                required
                                onChange={this.handleTitleChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-25">
                            <label htmlFor='title'>
                                Content
                            {' '}
                                <Required />
                            </label>
                        </div>
                        <div className="col-75">
                            <input
                                type='text'
                                name='content'
                                className='In-st'
                                id='content'
                                placeholder="Pick up kid after school at 3pm today"
                                required
                                onChange={this.handleContentChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <Button type='button' id='sub' onClick={this.handleClickCancel}>
                            Cancel
                        </Button>
                        {' '}
                        <Button type='submit' id='sub' onClick={this.handleSubmit}>
                            Create Agenda
                        </Button>
                    </div>
                </form>
            </Section>
        );
    }
}