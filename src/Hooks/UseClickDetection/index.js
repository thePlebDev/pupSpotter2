import {useEffect,useState} from 'react'

const useClickDetection =(node,value)=>{
  const [state,setState] = useState(false)

  useEffect(()=>{
    const handleClick=(e)=>{
      if(node.current.contains(e.target)){
        setState(true)
      }else if(!node.current.contains(e.target) && !value){
        setState(false)
      }

    }

    document.addEventListener("mousedown",handleClick)

    return()=>{
      document.removeEventListener("mousedown",handleClick)
    }
  },[state,node,value])

  return{
    state
  }

}

export default useClickDetection
