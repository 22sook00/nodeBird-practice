import React, {useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom/index'

const PostImages = ({images}) => {

  const [showImageZoom,setShowImagesZoom] = useState(false)
  const onZoom = useCallback(()=>{
    setShowImagesZoom((prev)=>!prev);
  },[]);

  //모달식으로 클릭시 확대
  const onClose = useCallback(()=>{
    setShowImagesZoom(false)
  },[])

  if(images.length === 1){
    return (
      <>
        <img role='presentation' src = {images[0].src} alt = {images[0].src} onClick = {onZoom} style = {{maxHeight : '200px'}}/>
        {showImageZoom && <ImagesZoom images = {images} onClose = {onClose}/>}
      </>
    )
  }
  if(images.length === 2){
    return (
      <>
        <img role='presentation' src = {images[0].src} alt = {images[0].src} onClick = {onZoom} style = {{width : '50%', display : 'inline-block'}}/>
        <img role='presentation' src = {images[1].src} alt = {images[1].src} onClick = {onZoom} style = {{width : '50%', display : 'inline-block'}}/>
        {showImageZoom && <ImagesZoom images = {images} onClose = {onClose}/>}
      </>
    )
  }
  //img 가 세개 이상일때는 더보기 버튼이 들어갈예정.
  return <>
    <img role='presentation' src = {images[0].src} alt = {images[0].src} onClick = {onZoom} style = {{width : '50%'}}/>
    <div 
    role = 'presentation'
    style = {{ display : 'inline-block', width : '50%', textAlign : 'center', verticalAlign : 'middle'}}
    onClick = {onZoom}
    >
      <PlusOutlined/>
      <br/>
      {images.length -1} 개의 사진 더보기

    </div>
    {showImageZoom && <ImagesZoom images = {images} onClose = {onClose}/>}
    </>
}

PostImages.propTypes = {
  images:PropTypes.arrayOf(PropTypes.object),

}

export default PostImages;