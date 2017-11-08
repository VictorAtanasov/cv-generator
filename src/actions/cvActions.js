import { cvs } from '../Firebase/Firebase';
export const GET_CV = 'get_cv';

export function getCV(userUid){
    return dispatch => {
        return cvs.child(userUid).on('value', (snapshot) => {
            dispatch({
                type: GET_CV,
                payload: snapshot.val()
            })
        })
    }
}

export function setData(uid, key, data){
    let db = cvs.child(uid).child(key);
    return dispatch => db.set(data)
}

export function setMultipleComponentData(uid, component, componentId, key, data){
    let db = cvs.child(uid).child(component).child(componentId).child(key);
    return dispatch => db.set(data)
}

export function pushData(uid, key, data){
    let db = cvs.child(uid).child(key);
    return dispatch => db.push(data)
}