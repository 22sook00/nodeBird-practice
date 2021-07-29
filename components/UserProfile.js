import React, { useCallback } from 'react'
import {Card , Avatar ,Button} from 'antd'
import Link from 'next/link'

const UserProfile = ({setIsLoggedIn}) => {
  
  const onLogOut = useCallback(()=>{
    setIsLoggedIn(false)
  },[]);
  
  return <>
    <Card 
      actions = {[
        <div key = 'twit'>hi <br/>0</div>,
        <div key = 'following'>팔로잉<br/>0</div>,
        <div key = 'followers'>팔로워<br/>0</div>
      ]}
    >
      <Card.Meta 
      avatar = {<Avatar>SOOK</Avatar>}
      title = 'sook'>
      </Card.Meta>
      <Button onClick = {onLogOut}>로그아웃</Button>
    </Card>
    </>
}

export default UserProfile;