import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { useState } from 'react';

import routes from './routes'

const App = ({ ...props }) => {
	if (props.loggedUser) {
		return (
			<div>
				{routes.map(route => <Route exact path={route.path} render={(props) => <route.component {...props} />} />)}
			</div>
		);
	} else {
		return <Redirect path='/login' />
	}

}


export default App;
