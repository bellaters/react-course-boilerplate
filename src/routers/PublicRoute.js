import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <div>
                <Component { ...props} />
            </div>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);

// 1. Create PublicRoute
// 2. Redirect to /dashboard if logged in
// 3. Render component if not logged in
// 4. use it for the LoginPage