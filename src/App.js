import React, {Fragment} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from './faac/Header';
import routes from './routes';

const App = ({ ...props }) => {
		return (
			<Fragment>
				<Header />
				<Switch>
					{routes.map(route => <Route exact path={route.path} render={(props) => <route.component {...props} />} />)}
				</Switch>
			</Fragment>
		);
		 

}


export default App;
