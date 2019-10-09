import React from 'react';

// Globally available javascript object that can be passed between react components without using props
const authContext = React.createContext({authenticated: false, login: () => {}});

export default authContext;