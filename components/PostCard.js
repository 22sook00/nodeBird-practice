
import React, {useState,useCallback} from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import CommentForm from './CommentForm'
import PostImages from './PostImages'
import PostCardContent from './PostCardContent'

import { Button ,Card, Avatar, Popover, List,Comment } from 'antd'
import { RetweetOutlined , HeartTwoTone , HeartOutlined , MessageOutlined , EllipsisOutlined} from '@ant-design/icons'

const PostCard = ({post}) => {
  
  const [liked, setLiked] = useState(false);
  const [commentFormOpened , setCommentFormOpened] = useState(false)
  //optional 체이닝 : ~~?.~~ 아이디가 있으면 me 가들어가고 없으면 언디파인이 들어간다.
  const id = useSelector((state)=>state.user.me ?.id);

  const onToggleLike = useCallback(()=>{
    //false true 서로 바꾸는방법으로 이것도있음.
    setLiked((prev)=>!prev);
  },[])
  const onToggleComment = useCallback(()=>{
    //false true 서로 바꾸는방법으로 이것도있음.
    setCommentFormOpened((prev)=>!prev);
  },[])
  
  return (
    <div style = {{marginBottom : 20}}>
      <Card cover = {post.Images[0] && <PostImages images = {post.Images}/>}
      //jsx에서 배열안에는 key를 넣어주어야 한다. ex)map 
      actions = {[
        <RetweetOutlined key = 'retweet'/>,
        liked ? 
          <HeartTwoTone twoToneColor = '#32211' key = 'heart' onClick = {onToggleLike}/> 
          :
          <HeartOutlined key = 'heart' onClick = {onToggleLike} />,
        <MessageOutlined key = 'comment'onClick = {onToggleComment}/>,
        <Popover key = 'more' content = {(
          <Button.Group>
            {/*로그인했고, 내 아이디가 아이디와 같으면 수정삭제가능, 아니면 신고가능 */}
            {id && post.User.id === id ? (
              <>
              <Button>수정</Button>
              <Button type = 'danger'>삭제</Button>
              </>
            ) : <Button>신고</Button>}
          </Button.Group>
        )}>
          <EllipsisOutlined />
        </Popover>
      ]}
      >
        <Card.Meta
        avatar = {<Avatar>{post.User.nickname[0]}</Avatar>}
        title = {post.User.nickname}
        description = {<PostCardContent postData = {post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post = {post}/>
          <List 
          header = {`${post.Comment.length}개의 댓글`}
          itemLayout = 'horizontal'
          dataSource = {post.Comments}
          renderItem = {(item)=>(
            <li>
              <Comment 
              author = {item.User.nickname[0]}
              avatar = {<Avatar>{item.User.nickname[0]}</Avatar>}
              content = {item.content}
              />

            </li>
          )}
          />
        
        </div>
      )}
    </div>
  )
}


PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard;