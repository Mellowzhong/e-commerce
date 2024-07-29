export function UserLogin() {
    return (
        <div className="text-center">
            <h1 className="my-4">User login</h1>
            <form className="grid justify-center" action="submit">
                <label htmlFor="email">
                    Email
                    <input className="border-2 rounded-md block text-center" type="text" name="email" id="email" placeholder="ignacio.lara.v@usach.cl" />
                </label>
                <label htmlFor="password">
                    Password
                    <input className="border-2 rounded-md block text-center" type="text" name="password" id="password" placeholder="*******************" />
                </label>
                <button className="border-2 rounded-md block mt-4">
                    Login
                </button>
            </form>
        </div>
    )
}