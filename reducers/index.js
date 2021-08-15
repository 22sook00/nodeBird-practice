//redux 서버사이드 렌더링을 위한 HYDRATE
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux'
import user from './user'
import post from './post'

//(이전상태, 액션) => 다음상태
//reducer 합쳐주는 리덕스 메서드
const rootReducer = combineReducers({
  //HYDRATE를 위해서 인덱스를 추가해주는 것이다. 서버사이드렌더링을 위해.
  index : (state = {},action) => {
  switch(action.type){
    case HYDRATE:
      console.log('HYDRATE',action)
      return {...state, ...action.payload};
    
    default:
      return state;
    }
  },
  user,
  post,
})

export default rootReducer;