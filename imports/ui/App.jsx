import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Facebook API integration</h1>
        </header>
        <AccountsUIWrapper />
      </div>
    );
  }
}
