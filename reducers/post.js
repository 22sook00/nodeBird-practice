//useState 로 썼던 더미데이터를 initialState 에 넣고 대문자로 된 부분은 실제 데이터를 받아서 넣으면 된다.
export const initialState = {
  mainPosts : [{
    //서버에서의 시퀄라이즈 등 다른정보들과 합칠만한 정보는 대문자로 시작하는게 좋다.
    //서버쪽에서 데이터 어떻게 보낼지 물어봐 제발좀. 아니면 따로 요청하쇼.
    id : 1,

    User : {
      id : 1,
      nickname : 'sook'
    },
    content : '첫번째 게시글 #해시태그 #익스프레스',

    Images : [{
      src : 'https://pix10.agoda.net/geo/country/100/3_100_canada_02.jpg?s=1920x'
    },{
      src : 'https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5e/12/b6/03/5e12b6031b66d2738de6.jpg'
    },{
      src : 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/6469/71877_large_1525743727.jpg?1525743727'
    }],

    Comment : [{
      User : {
        nickname : '숙이'
      },
      content: '돈 많이벌고싶다.',
    },{
      User : {
        nickname : 'hyeyoung'
      },
      content: '여행가고싶다.',
    },{
      User : {
        nickname : 'kitae'
      },
      content: '나도 돈 많이벌고싶다.',
    }]
  }],
  imagePaths : [], //image 업로드 경로들이 저장될것.
  postAdded : false, //게시글 추가가 완료되었을때.
}

//action 객체
const ADD_POST = 'ADD_POST'; //변수,상수로 따로빼준건 그냥 오타방지.
export const addPost = {
  type : ADD_POST,
}
const dummyPost = {
  id : 2,
  content: '더미데이터입니다.',
  User : {
    id:1,
    nickname : 'babo',
  },
  Images : [],
  Comment : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST: 
    return {
      ...state,
      mainPosts : [dummyPost, ...state.mainPosts],
      //dummyPost 를 앞에 추가해준 이유는 게시글이 앞에서부터 쌓이기때문.
      //반대가 되면 게시글 제일아래에 추가가 되버린다. 
    }
    default : 
    return state
  }
}

export default reducer;