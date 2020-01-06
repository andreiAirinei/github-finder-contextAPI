import React from 'react';
import GithubState from './github/GithubState';
import AlertState from './alert/AlertState';

const RootContext = ({ children }) => {
  return (
    <GithubState>
      <AlertState>
        {children}
      </AlertState>
    </GithubState>
  )
}

export default RootContext;
