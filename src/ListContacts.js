import React from 'react';

// stateless functional component because it only has the render method
function ListContacts(props) {
  return (
    <ol className='contact-list' >
      {props.contacts.map((contact) => (
        <li key={contact.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button className='contact-remove'>
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}
// class ListContacts extends React.Component {
//   render() {
//     console.log();
//
//   }
// }

export default ListContacts;
