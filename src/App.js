import React, { Fragment, useEffect } from 'react';
import {useStore} from './hookstore';
import { Route, Switch } from 'react-router-dom';
import Header from './faac/Header';
import routes from './routes';
import {auth} from './firebase/firebase'; 
const App = ({ ...props }) => {
	const [loggedUser, updateLoggedUser] = useStore();
	useEffect(() => {
		auth.onAuthStateChanged(loggedUser => {
            loggedUser
                ? updateLoggedUser(loggedUser.email)
                : updateLoggedUser(null);
        });
	}, [])
	return (
		<Fragment>
			<Header />
			<Switch>
				{routes.map(route => <Route path={route.path} exact={route.exact} render={(propsRoute) => <route.component {...props} {...propsRoute} />} />)}
			</Switch>
		</Fragment>
	);
}


export default App;
