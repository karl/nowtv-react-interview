import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './service';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { messages = [], members = [] } = this.props;
    const sortedMessages = [...messages];
    sortedMessages.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (b.timestamp < a.timestamp) {
        return 1;
      }
      return 0;
    });

    return (
      <div>
        <h1>Chat Log</h1>
        <table>
          <tbody>
            {sortedMessages.map(message => {
              const member = members.find(member => member.id === message.userId) || {};
              const { avatar, email } = member;

              return (
                <tr key={message.id}>
                  <td><img src={avatar || 'https://dummyimage.com/100x100/fff/000&text=No+avatar'} alt={email} /></td>
                  <td title={email}>{message.message}</td>
                  <td>{(new Date(message.timestamp)).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { messages, members } = state;
  return {
    messages,
    members,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
