import React from 'react'
//import AgendaContext from '../../contexts/AgendaContext'
//import AgendaApiService from '../../services/agenda-api-service'

class AgendaDetails extends React.Component{
  // static defaultProps = {
  //   match: { params: {} },
  // }

  // static contextType = AgendaContext

  // componentDidMount() {
  //   const { agendaId } = this.props.match.params
  //   this.context.clearError()
  //   AgendaApiService.getAgenda(agendaId)
  //     .then(this.context.setAgenda)
  //     .catch(this.context.setError)
  // }

  // componentWillUnmount() {
  //   this.context.clearAgenda()
  // }
    constructor(props) {
        super(props);
        this.state = {
          check: true,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render(){
      return (
       <div className="container section agenda-details">
           <div className="card z-depth-0">
            <form>
                <label>
                Check:
                <input
                    name="check"
                    type="checkbox"
                    checked={this.state.check}
                    onChange={this.handleInputChange} />
                </label>
                </form>
               <div className="card-content">
                   <span className="card-title">Agenda Title</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi unde sequi iste nostrum molestias a natus quia id mollitia voluptatem. Illum doloremque adipisci consequuntur officiis eveniet aliquid, qui ab cum!</p>
               </div>
               <div className="card-action gret lighten-4 grey-text">
                   <div>Posted by the </div>
                   <div>2nd September</div>
               </div>
               
           </div>
           
       </div>
    )
}
}
export default AgendaDetails
