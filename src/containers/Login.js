import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

const Login = ({...props}) => {
	const {history} = props;
	const [email, updateEmail] = useState();
	const [password, updatePassword] = useState();
		return (
		<LoginComponent email={email} password={password} updateEmail={updateEmail} updatePassword={updatePassword} />
	);}
	


export default withRouter(Login);