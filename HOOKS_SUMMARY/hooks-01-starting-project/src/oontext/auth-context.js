import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => { }
});

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAunthenticated] = useState(false);

    const loginHandler = () => {
        setIsAunthenticated(true);
    };
    return (
        <AuthContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;