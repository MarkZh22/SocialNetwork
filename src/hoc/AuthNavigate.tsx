import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

// Assuming you have a RootState type defined as shown in previous examples
interface RootState {
    auth: {
        isAuth: boolean;
    };
}

// We don't define Props here because we want our HOC to work with any props the component might need
export function AuthNavigate<T extends React.ComponentType<any>>(Component: T): React.ComponentType<React.ComponentProps<T>> {
    const NavigateComponent: React.FC<React.ComponentProps<T>> = (props) => {
        const checkAuth = useSelector((state: RootState) => state.auth.isAuth);

        // Render the wrapped component or redirect based on authentication
        if (checkAuth) {
            return <Component {...props} />;
        } else {
            return <Navigate to="/login" replace />;
        }
    };

    return NavigateComponent;
}
