import React, { useState,useCallback } from 'react'
import {Form , Input, Button} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const BtnWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
  padding : 10px;
`
//props 로 넘겨주는 애는 되도록이면 useCallback 을 써준다. 그래야 최적화가 된다.즉, 함수를 캐싱하는 것.

const LoginForm = ({setIsLoggedIn}) => {

  const [id,setId] = useState('')
  const [password, setPassword] = useState('')

  const onChangeId = useCallback((e) =>{
    setId(e.target.value)
  },[])
  const onChangePassword = useCallback((e) =>{
    setPassword(e.target.value)
  },[]);

  //onfinish 는 이미 e.preventDefault 가 적용되어 있다. 그래서 antd에서는 쓰면 e.preventDefault 안된다.
  const onSubmitForm = useCallback(()=>{
    console.log(id,password)
    setIsLoggedIn(true)
  },[id,,password])


  return <>
      <FormWrapper onFinish = {onSubmitForm}>
      <div>
        <label htmlFor = 'user-id'>아이디</label>
        <br/>
        <Input 
        name = 'user-id' 
        value = {id} 
        type = 'text' 
        onChange = {onChangeId} required></Input>
      </div>

      <div>
        <label htmlFor = 'user-id'>비밀번호</label>
        <br/>
        <Input 
        name = 'user-password' 
        value = {password} 
        type = 'password'
        onChange = {onChangePassword} required></Input>
      </div>

      <BtnWrapper>
        <Button type = 'primary' htmlType = 'submit' loading = {false} >로그인</Button>
        <Link href = '/signup'><a><Button>회원가입</Button></a></Link>
      </BtnWrapper>


    </FormWrapper>
    </>
}

export default LoginForm;