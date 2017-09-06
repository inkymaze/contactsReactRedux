import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//
// const people = [
//   { name: "Nick" },
//   { name: "Jon" },
//   { name: "Julia" },
// ];

class ContactList extends React.Component {
   render() {
     const people = this.props.contacts;

     return <ol>
       {people.map(person => (
         <li key={person.name}>{person.name}</li>
       ))}
     </ol>;
   }
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: "Nick" },
          { name: "Jon" },
          { name: "Julia" },
        ]} />
      </div>
    );
  }
}

export default App;
