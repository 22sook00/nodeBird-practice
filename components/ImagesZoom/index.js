import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Slick from 'react-slick'
import {Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper,Indicator,Global} from './style'

const ImagesZoom = ({images, onClose}) => {
  const [currentSlide , setCurrentSlide] = useState(0)
  return (
  <Overlay>
    <Global/>
    <Header>
      <h1>상세이미지</h1>
      <CloseBtn onClick = {onClose}/> 
    </Header>
    <SlickWrapper>
      <div>{/*공식문서*/}
        <Slick
          initialSlide = {0} //인덱스 0번째부터 시작
          beforeChange = {(slide)=>setCurrentSlide(slide)} //page를 넘기면 슬라이드에 번호를 준다.그걸 스테이트로 저장.
          infinite 
          arrows = {false}
          slidesToShow = {1} //한번에 하나씩만 넘길수있게
          slidesToScroll = {1}
        >
          {images.map((el)=>{
            return <ImgWrapper key = {el.src}>
              <img src = {el.src} alt = {el.src} />
            </ImgWrapper>
          })}
        </Slick>
        <Indicator>
          <div>
            {currentSlide + 1}
            {` `}
            /
            {images.length}
          </div>
        </Indicator>
      </div>
    </SlickWrapper>
  </Overlay>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;