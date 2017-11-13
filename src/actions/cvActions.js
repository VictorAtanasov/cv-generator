import { cvs } from '../Firebase/Firebase';
import { storage } from '../Firebase/Firebase';
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
    let db = cvs.child(uid).child('cvData').child(component).child(componentId).child(key);
    return dispatch => db.set(data)
}

export function pushData(uid, key, data){
    let db = cvs.child(uid).child('cvData').child(key);
    return dispatch => db.push(data)
}

export function pushMultipleComponentData(uid, component, componentId, type, data){
    let db = cvs.child(uid).child('cvData').child(component).child(componentId).child(type);
    return dispatch => db.push(data)
}

export function setMultipleComponentNestedData(uid, component, componentId, type, typeId, data){
    let db = cvs.child(uid).child('cvData').child(component).child(componentId).child(type).child(typeId);
    return dispatch => db.set(data)
}

export function deleteComponent(uid, component, componentId){
    let db = cvs.child(uid).child('cvData').child(component).child(componentId);
    return dispatch => db.remove();
}

export function deleteMultipleComponentNestedData(uid, component, componentId, type, typeId){
    let db = cvs.child(uid).child('cvData').child(component).child(componentId).child(type).child(typeId);
    return dispatch => db.remove();
}

export function uploadImage(uid, file){
    let db = storage.child(uid);
    let cvRef = cvs.child(uid).child('cvData').child('image');
    return dispatch => 
        db.put(file)
            .then( snapshot => {
                db.getDownloadURL()
                    .then(url => {
                        cvRef.set(url)
                    })
            });
}