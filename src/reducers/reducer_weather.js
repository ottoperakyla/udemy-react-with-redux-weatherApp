import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ] // This is nearly identical to doing "state.concat([action.payload.data])"
  }
  return state
} 
