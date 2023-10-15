
import React from 'react';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({ children }) {
    const alldata = JSON.parse(localStorage.getItem("alldata"))

    return (
        <>
            {
                localStorage.getItem("alldata") ? <>{children}</> : <><Navigate to={'/'} replace /></>
            }

        </>
    );
}

export default ProtectedRoute;

