import React, { Fragment } from 'react';
import {Row,Input, Button} from 'reactstrap';
import {useStore} from '../hookstore'

const SignupComponent = ({...props}) => {
    const [loggedUser] = useStore();
    console.log(loggedUser)
    return (
        <Fragment>
            <Row>
                <span>Tapez votre email</span>
            </Row>
            <Row>
                <Input type='email' onChange={(e) => props.updateEmail(e.target.value)} />
            </Row>
            <Row>
                <span>Tapez votre mot de passe</span>
            </Row>
            <Row>
                <Input type='password'onChange={(e) => props.updatePassword(e.target.value)}/>
            </Row>
            <Row>
                <span>Confirmez votre mot de passe</span>
            </Row>
            <Row>
                <Input type='password'onChange={(e) => props.updatePassword(e.target.value)}/>
            </Row>
            <Button color={'primary'} onClick={() => props.signupFunction(props.email, props.password)}>S'inscrire</Button>
        </Fragment>
    )
}

export default SignupComponent;