import React, { useState } from "react"
import { postUser } from "../Services/UserServices";
import { useNavigate } from "react-router-dom";

export default function UserRegisterForm() {
    const [username, setUsername] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [secondPassword, setSecondPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password === secondPassword) {
            console.log("User created");
            await postUser({
                username: username,
                first_name: name,
                last_name: lastName,
                email: email,
                password: password
            });
            navigate("/login");
        } else {
            console.log("Passwords don't match");
        }
    }

    return (
        <div className="text-center">
            <h1 className="my-4">User register</h1>
            <form className="grid justify-center border-2 p-2 rounded-md" action="submit" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Username
                    <input onChange={(e) => setUsername(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="name" id="name" placeholder="Ignacio" />
                </label>
                <label htmlFor="name">
                    Name
                    <input onChange={(e) => setName(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="name" id="name" placeholder="Ignacio" />
                </label>
                <label htmlFor="lastName">
                    Last name
                    <input onChange={(e) => setLastName(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="lastName" id="lastName" placeholder="Lara" />
                </label>
                <label htmlFor="email">
                    Email
                    <input onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="email" id="email" placeholder="ignacio.lara.v@usach.cl" />
                </label>
                <label htmlFor="password">
                    Password
                    <input onChange={(e) => setPassword(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="password" id="password" placeholder="*******************" />
                </label>
                <label htmlFor="password">
                    Confirm password
                    <input onChange={(e) => setSecondPassword(e.target.value)} className="border-2 rounded-md block text-center" type="text" name="secondPassword" id="secondPassword" placeholder="*******************" />
                </label>
                <button className="border-2 rounded-md block mt-4">
                    Create user
                </button>
            </form>
        </div>
    )
}