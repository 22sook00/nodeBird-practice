export const initialState = {
    isLoggedIn : false,
    me : null,
    signupData : {},
    loginData : {},
}

export const loginAction = (data) => {
  return {
    type : 'LOG_IN',
    data
  }
}
export const logoutAction = () => {
  return {
    type : 'LOG_OUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'LOG_IN' :
      return {
        ...state,
        isLoggedIn : true, // 바꾸고싶은것만 명확하게
        me : action.data,
      };
    case 'LOG_OUT' :
      return {
        ...state,
        isLoggedIn : false, // 바꾸고싶은것만 명확하게
        me : null,
      };
    default : 
    return state;
  }
}

export default reducer;