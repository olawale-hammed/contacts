import React from 'react';

import axios from 'axios';

export default class List extends React.Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/contacts`)
      .then(res => {
        const contacts = res.data;
        this.setState({ contacts });
      })
  }

  render() {
    return (
      <ul>
        { this.state.contacts.map(contact => <li>{contact.id} {contact.first_name} {contact.last_name} {contact.phone}</li>
          )}
      </ul>
    )
  }
}

// export default Add