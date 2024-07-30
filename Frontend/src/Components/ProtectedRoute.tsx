import api from '../Api';
// import { getExpiration } from '../Utilities/Decoded'; usar la ruta de verify
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../Utilities/Constants'
import { useState, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cookies, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);

    const refreshToken = useCallback(async () => {
        const refreshToken = cookies[REFRESH_TOKEN];

        try {
            const response = await api.post("/token/refresh/", {
                refresh: refreshToken,
            });
            if (response.status === 200) {
                setCookie(ACCESS_TOKEN, response.data.access, { path: '/' });
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
    }, [cookies, setCookie]);

    const auth = useCallback(async () => {

        const token: string = cookies[ACCESS_TOKEN];

        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        const tokenExpiration = await api.post("/token/verify/", { token: token });

        if (tokenExpiration.status === 200) {
            await refreshToken();
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        auth().catch(() => setIsAuthenticated(false));

        const intervalId = setInterval(() => {
            auth().catch(() => setIsAuthenticated(false));
        }, 1800000);

        return () => clearInterval(intervalId);
    }, [auth]);

    if (isAuthenticated === false) {
        return <div>Loading...</div>
    }

    return isAuthenticated ? children : <Navigate to="/login" />
}