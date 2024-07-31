import { useEffect } from "react"
import { ACCESS_TOKEN } from '../Utilities/Constants'
import { useCookies } from 'react-cookie'
import { getUserFromCookies } from "../Utilities/Decoding/Decoding"
import { useState } from "react"
import { User } from "../Utilities/Types/types"

function Testing() {
    const token = useCookies([ACCESS_TOKEN])[0][ACCESS_TOKEN]
    const [user, setUser] = useState<User>()

    const test = async () => {
        const newUser = await getUserFromCookies(token)
        setUser(newUser)
    }

    useEffect(() => {
        test()
    }, [])

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