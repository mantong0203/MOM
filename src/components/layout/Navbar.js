import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends React.Component {
   render(){
    //const {agenda} = this.props
    return (
        <nav className="Nav-wrapper grey daren-3">
            
            <div className="container">
                <Link to='/' className="brand-logo">Mom</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>    
  
    )
}
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
       agenda:state.agenda
    }
}
export default connect(mapStateToProps)(Navbar)