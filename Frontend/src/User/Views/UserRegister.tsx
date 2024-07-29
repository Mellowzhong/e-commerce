import UserRegisterForm from "../Components/UserRegisterForm"
import { Link } from "react-router-dom"

export default function UserRegister() {
    return (
        <div className="grid justify-center">
            <UserRegisterForm />
            <Link to="/login">
                <button className="border-2 rounded-md block mt-4 w-full">
                    Login
                </button>
            </Link>
        </div>
    )
}