import React, { useState, useCallback } from 'react'
import AppLayOut from "../components/AppLayOut"
import {Form,Input,Checkbox,Button} from 'antd'
import Head from 'next/head'
import useInput from '../hooks/useInput'
import styled from 'styled-components'

const ErrMsg = styled.div`
color : red;
`

const Signup = () => {

  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [pw, onChangePw] = useInput('');
  const [pwchk, setPwchk] = useState('');
  const [pwchkErr, setPwchkErr] = useState(false);
  const [term, setTerm] = useState(''); 
  const [termErr, setTermErr] = useState(false); 


  const onChangePwchk = useCallback((e)=>{
    setPwchk(e.target.value); //여기까진 useInput 과 같지만 한번더오류체크
    setPwchkErr(e.target.value !== pw)
  },[pw])
  const onChangeTerm = useCallback((e)=>{
    setTerm(e.target.checked);
    setTermErr(false);
  },[])

  const onSubmit = useCallback(()=>{
    if(pw !== pwchk) return setPwchkErr(true);
    if(!term) return setTermErr(true);
    console.log(id,nickname,pw) //서버로 보내는 데이터들 잘 실행되는지 콘솔확인 -> 이거를 서버에 보내주면 된다. 
  },[pw,pwchk,term])

  return (
    <AppLayOut>
      <Head>
        <title>회원가입 - NodeBird</title>
      </Head>
      <Form onFinish = {onSubmit}>
        <div>
          <label htmlFor = 'user-id'>아이디</label>
          <br/>
          <Input name = 'user-id' value = {id} required onChange = {onChangeId}/>
        </div>

        <div>
          <label htmlFor = 'user-nickname'>닉네임</label>
          <br/>
          <Input name = 'user-nickname' value = {nickname} required onChange = {onChangeNickname}/>
        </div>

        <div>
          <label htmlFor = 'user-pw'>비밀번호</label>
          <br/>
          <Input name = 'user-pw' value = {pw} required onChange = {onChangePw}/>
        </div>

        <div>
          <label htmlFor = 'user-pwchk'>비밀번호 확인</label>
          <br/>
          <Input name = 'user-pwchk' value = {pwchk} required onChange = {onChangePwchk}/>
          {pwchkErr && <ErrMsg>비밀번호가 일치하지 않습니다.</ErrMsg>}
        </div>
        <div>
          <Checkbox name = 'user-term' checked = {term} onChange = {onChangeTerm}>리액트 공부열심히할것을 동의합니다.</Checkbox>
          {termErr && <ErrMsg>약관에 동의하셔야 합니다.</ErrMsg>}
        </div>    
        <div style = {{marginTop : 10}}>
          <Button type = 'primary' htmlType = 'submit'>가입하기</Button>
        </div>
      </Form>
    </AppLayOut>)
}

export default Signup;