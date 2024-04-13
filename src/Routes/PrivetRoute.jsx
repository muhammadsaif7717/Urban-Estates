import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={ location.pathname} to='/sign-in' />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
