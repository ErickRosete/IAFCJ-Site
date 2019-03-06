import React from 'react';

export default React.createContext({
    token: null,
    userId: null,
    role: null,
    login: (token, userId, tokenExpiration, role) => { },
    logout: () => { }
});