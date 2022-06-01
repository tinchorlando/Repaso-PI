import { GET_ALL , GET_ONE , POST_NEW} from './utils/actionTypes.js';


const initialState = {
    characters: [],
    character: {},
};

export default function rootReducer(state = initialState, action) {
  switch(action.type){
    case GET_ALL:
        return{
            ...state,
            characters:action.payload,
        }
    case GET_ONE:
        return{
            ...state,
            character:action.payload
        }
    case POST_NEW:
        return{
            ...state,            
        }
    
    default:
        return state;
  }
}

