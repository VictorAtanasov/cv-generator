import { auth } from '../Firebase';
import { cvs } from '../Firebase';
export const GET_USER = 'get_user';

export function getUser(){
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            })
        })
    }
}

export function logIn(email, password){
    return dispatch => {
        return auth.signInWithEmailAndPassword(email, password)
            .then(function(user){
                return user.uid
            })
    }
}

export function logOut(){
    return dispatch => {
        return auth.signOut()
    }
}

export function signUp(email, password){
    return dispatch => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(function(user){
                return user
            })
            .then((user) => {
                cvs.child(user.uid).set({
                    email: user.email
                })
                return user.uid
            })
    }
}