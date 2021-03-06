import { auth } from '../Firebase/Firebase';
import { cvs } from '../Firebase/Firebase';
import cvData from '../Firebase/regData';
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

export function anonymous(){
    return dispatch => {
        return auth.signInAnonymously()
            .then((user) => {
                cvs.child(user.uid).set({
                    email: '',
                    name: '',
                    cvData
                })
                return user
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

export function signUp(email, password, name){
    return dispatch => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(function(user){
                user.updateProfile({
                    displayName: name
                }).then(() => {
                    return user
                })
                .then((user) => {
                    cvs.child(user.uid).set({
                        email: user.email,
                        name: user.displayName,
                        cvData
                    })
                    return user.uid
                })
                return user.uid
            })
    }
}