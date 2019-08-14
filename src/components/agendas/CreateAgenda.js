import React, { Component } from 'react'
import AgendaApiService from '../../services/agenda-api-service'
import AgendaContext from '../../contexts/AgendaContext'
import { connect } from 'react-redux'
import { createAgenda } from '../../store/actions/agendaActions'


class CreateAgenda extends Component {
    static contextType = AgendaContext
    state = {
        title:'',
        content:''

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value

        })
    }
    handleSubmit = ev => {
        
        ev.preventDefault()
        this.props.createAgenda(this.state)
        const { agenda } = this.context
        const { title, content } = ev.target
    
        AgendaApiService.postAgenda(agenda.id, title.value, content.value)
          .then(this.context.addReview)
          .then(() => {
            title.value = ''
          })
          .catch(this.context.setError)
      }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Agenda</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-filed">
                    <button className="btn pink lighten-1 z-depth-0">CREATE</button>
                </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createAgenda: (agenda) => dispatch(createAgenda(agenda))
    }
}
export default connect(null,mapDispatchToProps)(CreateAgenda)
