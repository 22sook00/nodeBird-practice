//범용적으로 사용되는 부분 따로 뺴놓기.

import {useState,useCallback} from 'react'

export default (initialValue = null) => {
  const [value ,setValue] = useState(initialValue);
  const handler = useCallback((e)=>{
    setValue(e.target.value)
  },[]);
  return [value,handler];
}