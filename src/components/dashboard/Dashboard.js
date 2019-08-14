import React, { Component } from 'react'
import Notifications from './Notifications'
import AgendaList from '../agendas/AgendaList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    

    render(){
        const { agendas } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <AgendaList agendas={agendas}/>
                    </div>
                    <div className="col s12 m5offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        agendas: state.agenda.agendas
    }
}
export default connect(mapStateToProps)(Dashboard)