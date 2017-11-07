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

export function pushData(uid, key, data){
    let database = cvs.child(uid).child(key);
    return dispatch => database.set(data)
}