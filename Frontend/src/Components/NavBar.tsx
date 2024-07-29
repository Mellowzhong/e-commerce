import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="my-4 py-4 border-b-2 text-center">
            <Link to="/">
                <span>
                    E-commerce
                </span>
            </Link>
            <section className="flex text-start justify-between">
                <span className="mx-4">categoria</span>
                <span className="mx-4">My shopping</span>
                <Link to="/login">
                    <span className="mx-4">User</span>
                </Link>
                <span className="mx-4">Cart</span>
            </section>
        </div>
    )
}