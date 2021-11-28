import { useAuth0 } from '@auth0/auth0-react';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (!children) {
        return null;
    }

    if (!isAuthenticated) {
        loginWithRedirect();
        return null;
        // auth0.loginWithRedirect();
    }

    return children;
}

// function RequireAuth() {
//     // let auth = useAuth();
//     // let location = useLocation();
//
//     // if (!auth.user) {
//     //     // Redirect them to the /login page, but save the current location they were
//     //     // trying to go to when they were redirected. This allows us to send them
//     //     // along to that page after they login, which is a nicer user experience
//     //     // than dropping them off on the home page.
//     //     // return <Navigate to="/login" state={{ from: location }} />;
//     // }
//
//     return children;
// }
