import React, { Component } from 'react';
import axios from 'axios';
import '../css/AddFact.css';

class AddFact extends Component {

  constructor(props){
    super(props);
    this.state = { 
      fact: '',
      name: ''
     }
  }

   handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let { fact, name } = this.state;
    if(fact.length > 10 && name.length > 2) {
      axios({
        method: 'post',
        url: '/facts/',
        data: {
          fact: fact,
          submittedBy: name
        },
      })
      .then( res => {
        this.setState({ 
          fact: '', 
          name: ''
        });
      })
    }
  }

  render() {
    return (
      <div className="my-4 add-fact">
        <form className="d-flex flex-column align-items-center" onSubmit={this.handleFormSubmit}>
            <textarea type="text" name="fact" 
              value={this.state.fact}
              placeholder="Add fact..."
              onChange={this.handleChange}
            />
          <label> 
            Submitted By: 
            <input type="text" name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFact;
