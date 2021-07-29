import React from 'react'
import {Form, Input} from 'antd'
import styled from 'styled-components'

const FormForNickname = styled(Form)`
  margin-bottom: 20px;
  padding: 20px;
  border : 1px solid #d9d9d9;
`

const NicknameEditForm = () => {
  return <>
    <FormForNickname>
      <Input.Search addonBefore = '닉네임' enterButton = '수정'/>
    </FormForNickname>
    </>
}

export default NicknameEditForm;