import React from 'react'
import AgendaContext from '../../contexts/AgendaContext'
import AgendaApiService from '../../services/agenda-api-service'
import { connect } from 'react-redux'


class AgendaDetails extends React.Component{
  // static defaultProps = {
  //   match: { params: {} },
  // }

  // static contextType = AgendaContext

  // componentDidMount() {
  //   console.log(this.props)
  //   const { agendaId } = this.props.match.params
  //   this.context.clearError()
  //   AgendaApiService.getAgenda(agendaId)
  //     .then(this.context.setAgenda)
  //     .catch(this.context.setError)
  // }

  // componentWillUnmount() {
  //   this.context.clearAgenda()
  // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       check: true,
    //     };
    
    //     this.handleInputChange = this.handleInputChange.bind(this);
    //   }
    
    //   handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }
    
    render(){
      //const id = this.props.match.params.id;
      const { agenda } = this.context;
      if(agenda){
        return(
        <div className="container section agenda-details">
           <div className="card z-depth-0">
            {/* <form>
                <label>
                Check:
                <input
                    name="check"
                    type="checkbox"
                    checked={this.state.check}
                    onChange={this.handleInputChange} />
                </label>
                </form> */}
               <div className="card-content">
                   <span className="card-title">{agenda.title}</span>
                   <p>{agenda.content}</p>
               </div>
               <div className="card-action gret lighten-4 grey-text">
                   <div>Posted by  </div>
                   <div>2nd September</div>
               </div>
               
           </div>
           
       </div>
      )

      }else{
      return (
       <div className="container center">
         <p>Loading agenda...</p>
       </div>
    )
  }
}
}

const mapStateToProps = (state, ownProps) =>{
  //console.log(state);
  const id =ownProps.match.params.id;
  const agendas = state.agenda.agendas;
  const agenda = agendas ? agendas[id] : null
  return {
     agenda: agenda
  }
}
export default connect(mapStateToProps)(AgendaDetails)