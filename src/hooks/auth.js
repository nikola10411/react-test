import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            setIsAuthenticated(true);
        }
    }, [])

    const login = (username, password) => {
        if (username === 'testuser' && password === '123') {
            setIsAuthenticated(true);
            localStorage.setItem('auth', 'true');
        }
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('auth', 'false');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}