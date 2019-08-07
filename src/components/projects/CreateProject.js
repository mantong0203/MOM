import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title:'',
        content:''

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white"></form>
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
            </div>
        )
    }
}

export default CreateProject
