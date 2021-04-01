import React from 'react';
import styled from 'styled-components'
import FaceIcon from '@material-ui/icons/Face';
import PetsIcon from '@material-ui/icons/Pets';


const Container = styled.nav`
  height:72px;
  background-color:#289672;
  overflow:hidden;
  display:flex;
  justify-content:space-around;
  `


const LinksContiner = styled.ul`
  display:flex;
  font-size:18px;
  color:white;
  list-decoration:none;
  margin:0;
  justify-content:flex-end;
  align-items:center;
  height:100%;

`

const Items = styled.li`
  list-style-type:none;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 10px;
`

const TitleContainer = styled.div`
  display:flex;
  font-size:25px;
  color:white;
  justify-content:flex-end;
  align-items:center;
  height:100%;
`

const Title = styled.div`
  display:none;
  margin-right:10px;
  @media only screen and (min-width: 600px) {
  display:block;
}
`



const data =['Login','Signup',<FaceIcon style={{fontSize:'33px'}}/>]

const Navigation=()=>{

  return(
    <Container>
    <TitleContainer>
        <Title>Pup Spotter</Title>
        <PetsIcon style={{fontSize:'33px'}} />
    </TitleContainer>


      <LinksContiner>
        {
          data.map((item,index)=>{
            return(
              <Items>{item}</Items>
            )
          })
        }
      </LinksContiner>
    </Container>
  )
}

export default Navigation
