import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';

import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

 const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// render only ones! I.e. make a singelton
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));  
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged( (user) => {
    if(user){
        store.dispatch(login(user.uid));
        
        renderApp();
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


//ReactDOM.render(jsx, document.getElementById('app'));


// add some fake data
//store.dispatch(addExpense({description: 'Water bill', amount: 5000, createAt: moment()}));
//console.log(store.getState());

//store.dispatch(addExpense({description: 'Gas bill', amount: 7000, createAt: moment()}));
//store.dispatch(addExpense({description: 'Rent', amount: 109500, createAt: moment()}));