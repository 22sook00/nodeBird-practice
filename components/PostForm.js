import {Form, Input ,Button} from 'antd'
import React, { useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addPost} from '../reducers/post'

const PostForm = () => {

  const imageInput = useRef(); 
  // DOM 에 접근하기 위한 useRef()
  const {imagePaths} = useSelector((state)=>state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  })
  const onSubmit = useCallback(()=>{
    //onChangeText 에 남긴글을 포스팅해야하므로 ADD_POST 실행시킨다.
    //디스패치를 해줘야함
    dispatch(addPost); //액션은 객체임을 잊지마. 
    setText('')
  },[])

  //이미지업로드 클릭
  const onClickImgUpload = useCallback(()=>{
    imageInput.current.click();
  }, [imageInput.current])
  //imageInput.current 을 통해 imageInput에 접근할 수 있다.

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish = {onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      
      <div>
        <input type = 'file' multiple hidden ref ={imageInput} />
        <Button onClick = {onClickImgUpload}>이미지 업로드</Button>
        <Button type = 'primary' 
        style = {{float : 'right'}} htmlType = 'submit'>짹짹</Button>
      </div>

      <div>
        {imagePaths.map((v)=>{
          return <div key = {v} style = {{display : 'inline-block'}}>
            <img src = {v} style = {{width : '200px'}} alt = {v} />
            <div><Button>제거</Button></div>
            </div>
        })}
      </div>

    </Form>
  )
}

export default PostForm;