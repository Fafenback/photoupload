import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SignupComponent from '../components/SignupComponent';
import { auth } from '../firebase/firebase'

const Signup = ({ ...props }) => {
    const [error, updateError] = useState();
    const [email, updateEmail] = useState();
    const [password, updatePassword] = useState();
    const signup = (email, password) => {return auth.createUserWithEmailAndPassword(email, password).catch((error) => updateError(error))};
    return <Container fluid>
        <SignupComponent signupFunction={signup} email={email} password={password} updateEmail={updateEmail} updatePassword={updatePassword} error={error} />
    </Container>
}

export default Signup;