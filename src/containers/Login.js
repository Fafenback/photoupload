import React, { Fragment } from 'react';
import { Input } from 'reactstrap';
import { useStore } from '../hookstore'

const Login = () => {
	const [timesClicked] = useStore();
	console.log(timesClicked)
	return (
		<div>
			<h1>
				Hello, this is a second component, with no relation to the one on the
        top
      </h1>
			<h2>
				Using the useStore hook, I know the user clicked on the button {timesClicked} times!
      </h2>
		</div>
	);
}


export default Login;