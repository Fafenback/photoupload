import React, { Component } from 'react';
import {Input} from 'reactstrap';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state={}
	}
	render() {
		return 	<React.Fragment>
					<Input type='email' />
					<Input type='password'/>
				</React.Fragment>
	}
}

export default Login;