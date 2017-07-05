import { getMessages, getMembers } from './data';

const getMessagesAction = () => {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

const getMembersAction = () => {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  };
}

export const init = () => (dispatch) => {
  dispatch(getMessagesAction());
  dispatch(getMembersAction());
}
