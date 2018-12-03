import React, { Component } from 'react'
import  {useStore} from '../hookstore'
import {Redirect} from 'react-router-dom'

const PhotosList = ({...props}) => {
    const [loggedUser] = useStore();
        if (!loggedUser) {
            return <Redirect to='/login' />
        } else {
            return <div>PhotosList</div>
        }
}
        
export default PhotosList;