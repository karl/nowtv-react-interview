import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const AVATAR = 'https://example.com/avatar';
  const EMAIL = 'email@example.com';
  const FIRST_MESSAGE = 'First message';
  const SECOND_MESSAGE = 'Second message';
  const FORMATTED_DATE = '2/9/2016, 4:27:38 AM';

  const init = () => {};
  const members = [
    { id: '11', avatar: AVATAR, email: EMAIL },
  ];
  const messages = [
    { id: '2', userId: '22', message: SECOND_MESSAGE, timestamp: '2017-02-09T04:27:38Z' },
    { id: '1', userId: '11', message: FIRST_MESSAGE, timestamp: '2016-02-09T04:27:38Z' },
  ]

  it('should render a list of messages sorted by timestamp', () => {
    const wrapper = shallow(<App.WrappedComponent init={init} messages={messages} members={members} />);
    const rows = wrapper.find('tr');
    expect(rows).toHaveLength(2);
    expect(rows.at(0).text()).toContain(FIRST_MESSAGE);
    expect(rows.at(1).text()).toContain(SECOND_MESSAGE);
  });

  it('should render an avatar, message, time', () => {
    const wrapper = shallow(<App.WrappedComponent init={init} messages={messages} members={members} />);
    const row = wrapper.find('tr').at(0);

    expect(row.contains(<td title={EMAIL}>{FIRST_MESSAGE}</td>)).toBe(true);
    expect(row.contains(<img src={AVATAR} alt={EMAIL} />)).toBe(true);
    expect(row.contains(<td>{FORMATTED_DATE}</td>)).toBe(true);
  });
});

