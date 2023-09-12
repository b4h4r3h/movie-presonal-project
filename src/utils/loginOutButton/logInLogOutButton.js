import { useAuth0 } from "@auth0/auth0-react";

export function LoginButton() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <button onClick={() =>loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}
export function LogoutButton() {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={() =>logout()}>
                Sign Out
            </button>
        )
    )
}