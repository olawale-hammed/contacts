import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Add from './Components/addContact.js'
import List from './Components/contacts.js'
import Delete from './Components/deleteContact.js';


class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <Add/>
          <List />
          <Delete />
      </div>
      </Router>
      
    )
  }
}

export default App;
