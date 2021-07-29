import React from 'react'
// next.js 에서는 있어도그만 없어도그만임 -> pages 폴더를 인식해서 그 안에 있는 파일들을 코드스플리팅
// next.js 안의 폴더명은 무조건 pages -> 이 안에 파일만들기
// 단점 : 새 파일 만들때마다 서버 나갔다가 들어와야한다.
import AppLayOut from '../components/AppLayOut'

const Home = () => {
  return (
    <AppLayOut>
      <div>i'm idx</div>
    </AppLayOut>
    )
}

export default Home;