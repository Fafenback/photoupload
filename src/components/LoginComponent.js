import {withRouter} from 'react-router-dom';
import {useStore} from '../hookstore';
import React, {Fragment} from 'react';
import {Input, Button, Row} from 'reactstrap';
import {auth} from '../firebase/firebase'
const LoginComponent = ({...props}) => {
    const {history} = props
    const [loggedUser, updateLoggedUser] = useStore();
    return (
        <Fragment>
            <Row>Email</Row>
            <Row><Input onChange={(e) => props.updateEmail(e.target.value)} /></Row>
            <Row>Mot de passe</Row>
            <Row><Input onChange={(e)=> props.updatePassword(e.target.value)}/></Row>
            <Row><Button onClick={() => auth.signInWithEmailAndPassword(props.email, props.password).then((res)=> updateLoggedUser(auth.currentUser.email)).then((res) => history.push('/')).catch((err) => console.log(err))}>Connexion</Button></Row>
            <Button onClick={() => history.push('/signup')}>Inscription</Button>
        </Fragment>
    )
}

export default withRouter(LoginComponent);