import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu,Input,Row,Col } from 'antd';
import {useSelector} from 'react-redux'
import {createGlobalStyle} from 'styled-components'

import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

//앤트디자인은 grid 지원해준다 : Row,Col
//1/가로먼저 자르고 세로를 잘라준다.
//2/반응형 할땐 무조건 모바일->태블릿->PC 순으로 해야한다. 
//xs : mobile / sm : tablet / md : 작은 데스크탑
//gutter : 간격 -> 이거 프론트에서는 엄청많이 쓰인다. 
//a href= 'https://velog.io/@22soook00' target = '_blank' rel = 'noreferrer noopener' 보안상의 이유로 꼭 쓰도록.
//antd 에서 스타일드 컴포넌트 적용하기 styled(__)`` : inline 스타일처리르 하면 리렌더링 할때 최적화가 되지 않는다. 
//만약 useMemo : 값을 캐싱하는것. , styled-components 를 안쓰고싶다면 useMemo
//const style = useMemo(()=>{{marginTop:10}},[])
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayOut = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  
  return (
    <div>
      <Global/>
      <Menu mode = 'horizontal'>

        <Menu.Item key = 'home'>
        <Link href = '/'><a>노드버드</a></Link>
        </Menu.Item>

        <Menu.Item key ='profile'>
        <Link href = '/profile'><a>프로필</a></Link>
        </Menu.Item>

        <Menu.Item key = 'mail'>
          {/*해시태그 설정 : Input.search , antd에서 styled-components 는 어떻게 할까?*/}
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>

        <Menu.Item>
        <Link href = '/signup'><a>회원가입</a></Link>
        </Menu.Item>        
      </Menu>
      
      <Row gutter = {8}>
          <Col xs = {24} sm = {6} md = {6}>
          {isLoggedIn
            ? <UserProfile />
            : <LoginForm />}
          </Col>
          <Col xs = {24} md = {12}>
            {children}
          </Col>
          <Col xs = {24} md = {6}>
            <a href= 'https://velog.io/@22soook00' target = '_blank' rel = 'noreferrer noopener'>숙영블로그</a>
          </Col>
        </Row>
    </div>
  )
};
AppLayOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayOut;