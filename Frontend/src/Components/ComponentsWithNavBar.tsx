import NavBar from "./NavBar"

export default function ComponentsWithNavBar({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
