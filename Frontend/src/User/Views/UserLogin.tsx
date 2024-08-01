import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../Utilities/Constants'
import { useCookies } from 'react-cookie';
import { getUserFromCookies } from "../../Utilities/Decoding/Decoding";
import { UserResponse } from "../..//Utilities/Types/types"
import { createUser } from "../..//Redux/States/User"
import { useAppDispatch } from "../..//Utilities/Hooks/Hooks"
import api from '../../Api';

export default function UserLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post("/token/", { username, password });
            if (response.status === 200) {
                setCookie(ACCESS_TOKEN, response.data.access, { path: '/' });
                setCookie(REFRESH_TOKEN, response.data.refresh, { path: '/' });

                const userResponse = await getUserFromCookies(response.data.access) as UserResponse;

                const { status, data } = userResponse;

                if (status === 200) {
                    dispatch(createUser(data));
                } else {
                    console.log(`Error: ${status}`);
                }

                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid text-center justify-center">
            <h1 className="my-4">User login</h1>
            <form className="grid justify-center border-2 p-2 rounded-md" action="submit" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Username
                    <input onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="email" id="email" placeholder="ignacio.lara.v@usach.cl" />
                </label>
                <label htmlFor="password">
                    Password
                    <input onChange={(e) => setPassword(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="password" id="password" placeholder="*******************" />
                </label>
                <button className="border-2 rounded-md block mt-4">
                    Login
                </button>
            </form>
            <Link to="/register">
                <button className="border-2 rounded-md block mt-4 w-full">
                    Register
                </button>
            </Link>
        </div>
    )
}