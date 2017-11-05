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