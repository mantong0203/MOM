import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WeekdayContext, { nullWeekday } from '../../contexts/WeekdayContext'
import WeekdayApiService from '../../services/weekday-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import StyleIcon from '../../components/StyleIcon/StyleIcon'
import AgendaForm from '../../components/AgendaForm/AgendaForm'
import './WeekdayListItem.css'

export default class WeekdayPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = WeekdayContext

  componentDidMount() {
    const { weekdayId } = this.props.match.params
    this.context.clearError()
    WeekdayApiService.getWeekday(weekdayId)
      .then(this.context.setWeekday)
      .catch(this.context.setError)
    WeekdayApiService.getWeekdayAgendas(weekdayId)
      .then(this.context.setAgendas)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearWeekday()
  }

  renderWeekday() {
    const { weekday, agendas } = this.context
    return <>
      <h2>{weekday.title}</h2>
      <p>
        <WeekdayStyle weekday={weekday} />
        {weekday.author.id && <>
          <Hyph />
          <WeekdayAuthor weekday={weekday} />
        </>}
        <Hyph />
        <NiceDate date={weekday.date_created} />
      </p>
      <WeekdayContent weekday={weekday} />
      <WeekdayAgendas agendas={agendas} />
      <AgendaForm />
    </>
  }

  render() {
    const { error, weekday } = this.context
    let content
    if (error) {
      content = (error.error === `Weekday doesn't exist`)
        ? <p className='red'>Weekday not found</p>
        : <p className='red'>There was an error</p>
    } else if (!weekday.id) {
      content = <div className='loading' />
    } else {
      content = this.renderWeekday()
    }
    return (
      <Section className='WeekdayPage'>
        {content}
      </Section>
    )
  }
}

function WeekdayStyle({ weekday }) {
  return (
    <span className='WeekdayPage__style'>
      <StyleIcon style={weekday.style} />
      {' '}
      {weekday.style}
    </span>
  )
}

function WeekdayAuthor({ weekday = nullWeekday }) {
  return (
    <span className='WeekdayPage__author'>
      {weekday.author.full_name}
    </span>
  )
}

function WeekdayContent({ weekday }) {
  return (
    <p className='WeekdayPage__content'>
      {weekday.content}
    </p>
  )
}

function WeekdayAgendas({ agendas = [] }) {
  return (
    <ul className='WeekdayPage__agenda-list'>
      {agendas.map(agenda =>
        <li key={agenda.id} className='WeekdayPage__agenda'>
          <p className='WeekdayPage__agenda-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='WeekdayPage__agenda-icon blue'
            />
            {agenda.text}
          </p>
          <p className='WeekdayPage__agenda-user'>
            {agenda.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}

