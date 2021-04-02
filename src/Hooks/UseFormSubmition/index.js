import {useState} from 'react'

const useFormSubmition =(stateSchema)=>{
  const [state,setState] = useState(stateSchema)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('SUBMITTED THE FORM')
    console.log(state)
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  return{
    state,
    handleSubmit,
    handleChange
  }
}


export default useFormSubmition
