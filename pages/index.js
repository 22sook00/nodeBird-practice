import React from 'react'
import { useSelector } from 'react-redux'
// next.js 에서는 있어도그만 없어도그만임 -> pages 폴더를 인식해서 그 안에 있는 파일들을 코드스플리팅
// next.js 안의 폴더명은 무조건 pages -> 이 안에 파일만들기
// 단점 : 새 파일 만들때마다 서버 나갔다가 들어와야한다.
import AppLayOut from '../components/AppLayOut'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

const Home = () => {
  const {isLoggedIn} = useSelector((state)=>state.user)
  const {mainPosts} = useSelector((state)=>state.post)
  //게시글은 로그인한 사람만 쓸수있으니까 조건을 걸어줘.
  
  //여기서 index 를 키로쓰면 절대안된다. 특히 게시글이 지워질 가능성이 있는 경우에는 
  //반복되는것들이 지워직 가능성이 있을경우 절대쓰며안됨. 중간에 추가되거나 삭제 되면 쓰면안되.
  //단, 반복되지만 바뀌지않는다면 써도된다. 
  return (
    <AppLayOut>
      { isLoggedIn && <PostForm/>}
      { mainPosts.map((post)=>{
        return <PostCard key = {post.id} post = {post}/>
      })}
    </AppLayOut>
    )
}

export default Home;