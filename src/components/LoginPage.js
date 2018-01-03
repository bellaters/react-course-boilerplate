import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// 1. Create LoginPage component with 'Login' button
// 2. Add snapshot test for LoginPage
// 3. Show Login component at root of app -> /
// 4. Show ExpenseDashboardPage at -> /dashboard
export const LoginPage = ({startLogin}) => (
    <div className="box-layout" >
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>ITag line for app.</p>
            <button className="button" onClick={startLogin}>
            Login with Google
            </button>        
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
