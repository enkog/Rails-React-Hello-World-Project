import { GET_GREETING } from "../actions/actionTypes";
import { getGreetings } from "../actions/actionCreators";
import axios from 'axios'

export const fetchGreeting = () => async (dispatch) => {
    await axios.get('http://localhost:3000/api/v1/greetings')
      .then((response) => {
        dispatch(getGreetings(response.data));
      });
  };

const greetingsReducer = (state = [], action) => {
  switch(action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;    
  }
}

export default greetingsReducer