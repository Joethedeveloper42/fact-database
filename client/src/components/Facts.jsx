import React, { Component } from 'react';
import AddFact from './AddFact';

import axios from 'axios';
import '../css/Facts.css';

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: []
    };
  }

  getfacts = () => {
    axios.get('/facts/')
    .then( facts => {
      this.setState({ facts: facts.data })
    })
  }

  componentDidMount(){
    this.getfacts();
  }

  deleteFact = (fact) => {
    let { _id } = fact;
    axios.delete(`/facts/${_id}`)
    .then( res => {
      this.getfacts();
    })
  }

  render() {
    return (
      <div className="facts d-flex flex-column align-items-center">
        <h2>Our latest facts:</h2>
        <ul className="text-center">
          {this.state.facts.map( fact => {
            return <li className="my-2" key={fact._id}>"{fact.fact}" by <strong>{fact.submittedBy}</strong> <button onClick={() => this.deleteFact(fact)} className="btn btn-outline-danger">Delete</button></li>
          })}
        </ul>
        <AddFact />
      </div>
    );
  }
}

export default Facts;