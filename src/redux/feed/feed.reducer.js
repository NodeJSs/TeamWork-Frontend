import feedActionTypes from './feed.types'

const INITIAL_STATE ={
  feeds: {
    author: '',
    post :''
  },
  isLoading: false,
  error:false
}

const feedReducer = ( state =INITIAL_STATE, action )=>{
  switch(action.type){
case feedActionTypes.FEED_START:
  return{
    ...state,
    isLoading: true
  };
  case feedActionTypes.FEED_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      post: action.payload
    };
    case feedActionTypes.FEED_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  
  default:
   return state;
}
}
export default feedReducer
