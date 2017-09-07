import React from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';

// stateless functional component because it only has the render method
class ListContacts extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState( {query: ''} )
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;

    let showingContacts
    if (query) {
      // the 'i' ignores case
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts= contacts
    }



    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>

        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}/>
          <Link
            to='/create'

            className='add-contact'>Add Contact</Link>

        </div>

        {showingContacts.length !== contacts.length && (
            <div className='showing-contacts'>
              <span>Now showing {showingContacts.length} of {contacts.length}</span>
              <button onClick={this.clearQuery}>Show All</button>
            </div>
        )}

        <ol className='contact-list' >
          {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                  className='contact-remove'
                  onClick={() => onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>

    );
  }
}
// class ListContacts extends React.Component {
//   render() {
//     console.log();
//
//   }
// }
//
// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// };

export default ListContacts;
