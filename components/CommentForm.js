//post 를 넘겨준다. : 댓글을 작성할때 게시글에 속해있기 때문에
//게시글의 아이디가 필요하다. -> 커멘트 폼이 받아야하기 때문.
//현재 폼만해도 로그인, 회원가입, 댓글창 폼.. 등등 여러개이다.-> 이럴때 useInput으로 커스텀훅 만들기.
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'
import {Form, Input, Button} from 'antd'

const CommentForm = ({post}) => {
  //id 없는경우를 대비해줘야한다. 
  const id = useSelector((state)=>state.user.me?.id);

  const [commentText,onChangeCommentText ] = useInput('')
  const onSubmitComment = useCallback(()=>{
    console.log(post.id, commentText)
  },[commentText]);

  return <div>
    <Form onFinish = {onSubmitComment}>
      <Form.Item>
      <Input.TextArea value = {commentText} onChange = {onChangeCommentText} row = {4}/>
      <Button type = 'primary' htmlType = 'submit'>삐약</Button>
      </Form.Item>
    </Form>
    </div>
}

CommentForm.propTypes = {
  post:PropTypes.object.isRequired
}

export default CommentForm;