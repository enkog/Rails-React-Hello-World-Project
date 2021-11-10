import { GET_GREETING } from "../actions/actionTypes";

const greetingsReducer = (state = [], action) => {
  switch(action.type) {
    case GET_GREETING:
      return action.todos;
        default:
          return state;    
  }
}

export default greetingsReducer