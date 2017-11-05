import { GET_CV } from '../actions/cvActions';

export default function (state = { loading: true }, action) {
  switch (action.type) {
    case GET_CV:
      return { 
          loading: false, 
          ...action.payload
      };
    default:
      return state;
  }
}