import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  // Since it's only one piece of state we initialize all state as null rather than the property of state as null
  const initialState = null;

  // DISPATCH() is pulled from userReducer HOOK

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type }
    })

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT })
    }, 3000);
  };

  return <AlertContext.Provider
    value={{
      alert: state,
      setAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;