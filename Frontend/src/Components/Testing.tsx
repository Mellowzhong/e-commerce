import { useEffect, useState } from "react"
import { ACCESS_TOKEN } from '../Utilities/Constants'
import { useCookies } from 'react-cookie'
import { getUserFromCookies } from "../Utilities/Decoding/Decoding"
import { User, UserResponse } from "../Utilities/Types/types"

function Testing() {
    const [cookies] = useCookies([ACCESS_TOKEN]);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const token = cookies[ACCESS_TOKEN];

    const test = async () => {
        try {
            if (!token) {
                setError("No token found");
                return;
            }

            const response = await getUserFromCookies(token) as UserResponse;
            console.log("response", response);

            const { status, data } = response;
            console.log("status", status);
            console.log("data", data);

            if (status === 200) {
                setUser(data);
            } else {
                setError(`Error: ${status}`);
            }
        } catch (err) {
            console.error("Error fetching user data:", err);
            setError("An error occurred while fetching user data");
        }
    }

    useEffect(() => {
        test();
    }, [token]); // Dependencia añadida para que se ejecute cuando el token cambie

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>Testing</div>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </>
    )
}

export default Testing