export function UserRegister() {
    return (
        <div className="text-center">
            <h1 className="my-4">User register</h1>
            <form className="grid justify-center" action="submit">
                <label htmlFor="name">
                    Name
                    <input className="border-2 rounded-md block text-center" type="text" name="name" id="name" placeholder="Ignacio" />
                </label>
                <label htmlFor="lastName">
                    Last name
                    <input className="border-2 rounded-md block text-center" type="text" name="lastName" id="lastName" placeholder="Lara" />
                </label>
                <label htmlFor="email">
                    Email
                    <input className="border-2 rounded-md block text-center" type="text" name="email" id="email" placeholder="ignacio.lara.v@usach.cl" />
                </label>
                <label htmlFor="password">
                    Password
                    <input className="border-2 rounded-md block text-center" type="text" name="password" id="password" placeholder="*******************" />
                </label>
                <label htmlFor="password">
                    Confirm password
                    <input className="border-2 rounded-md block text-center" type="text" name="secondPassword" id="secondPassword" placeholder="*******************" />
                </label>
                <label htmlFor="direction">
                    Direction
                    <input className="border-2 rounded-md block text-center" type="text" name="direction" id="direction" placeholder="Carlos Antunez 2229" />
                </label>
                <button className="border-2 rounded-md block mt-4">
                    Create user
                </button>
            </form>
        </div>
    )
}