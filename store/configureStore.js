import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index'

const configureStore = () => {

  //개발용 배포용 미들웨어가 다르다. npm i redux-devtools-extension
  // 데이터가 다보여서 보안에 취약할수가 있기 때문에 개발용일때는 기록보이게, 배포용일때는 안보이게 한다. 
  const middlewares = [];//saga || thunk 넣는곳.
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(reducer,enhancer);
  store.dispatch({
    type : 'CHANGE_NICKNAME',
    data: '2sook0'
  })
  return store;
}

const wrapper = createWrapper(configureStore,{
  debug : process.env.NODE_ENV === 'development',
});
export default wrapper;