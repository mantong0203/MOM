import React, { Component } from 'react'
import AgendaContext from '../../contexts/WeekdayContext'
import AgendaApiService from '../../services/weekday-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './AgendaForm.css'

export default class AgendaForm extends Component {
  static contextType = AgendaContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { agenda } = this.context
    const { text } = ev.target

    AgendaApiService.postAgenda(agenda.id, text.value)
      .then(this.context.addAgenda)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='AgendaForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a agenda...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a agenda..'>
          </Textarea>
        </div>


        <Button type='submit'>
          Create agenda
        </Button>
      </form>
    )
  }
}
