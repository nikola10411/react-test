import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { Fragment, useEffect } from "react";

const AuthGuard = ({ authed = true, component }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthed = () => {
            if (authed && !isAuthenticated) {
                navigate(`/login`);
            }else if (!authed && isAuthenticated) {
                navigate(`/`);
            }
        }
        if (component) {
            checkAuthed();
        }
    }, [component, authed, navigate, isAuthenticated]);



    return ((authed && isAuthenticated) || (!authed && !isAuthenticated)) ? <Fragment>{component}</Fragment> : <Fragment></Fragment>;
}

export default AuthGuard;