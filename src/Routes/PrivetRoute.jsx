import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-hs">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to='/sign-in' />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
