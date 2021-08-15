import React, {useState,useCallback} from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
//첫번째 게시글 #해시태그 어떤부분이 해시태그고 아닌지 정규표현식으로.
//RegExr 사이트에서 확인 후 복붙, split 은 () 붙여줘야 제대로 나온다. 
const PostCardContent = ({postData}) => { 
  return <div>
    {postData.split(/(#[^\s#]+)/g).map((el,idx)=>{
      if(el.match(/(#[^\s#]+)/g)){
        return <Link href = {`/hashtag/${el.slice(1)}`} key = {idx}><a>{el}</a></Link>
      }
      return el;
    })}
    </div>
}
PostCardContent.propTypes = {
  postData : PropTypes.string.isRequired
};
export default PostCardContent;