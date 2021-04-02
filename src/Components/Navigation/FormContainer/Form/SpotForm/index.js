import React from 'react';
import useFormSubmition from '../../../../../Hooks/UseFormSubmition'
import Form from '../index.js'
import TextInput from '../../../TextInput'
import TextInput2 from '../../../TextInput2'


const SpotForm =()=>{
  const {handleSubmit,handleChange,state} = useFormSubmition({name:"",description:""})
  return(
    <Form title={'Spot'} handleSubmit={handleSubmit}>
      <TextInput2 title={"Name"} type={'text'} handleChange={handleChange} name={'name'} value={state.name}/>
      <TextInput2 title={"Description"} type={"text"} handleChange={handleChange} name={'description'} value={state.description}/>
    </Form>
  )
}



export default SpotForm
