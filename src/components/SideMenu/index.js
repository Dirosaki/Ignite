import React, {useEffect} from 'react';

import * as S from './styles'

function SideMenu() {
  const user = JSON.parse(localStorage.getItem('user'))
  const category = localStorage.getItem('category')
  console.log(user.name)
  // useEffect(()=>{
  //   const user = localStorage.getItem('user')
  //   console.log(user)
  // }, [])

  return (
    <S.MainContainer>
      <S.Image src={`data: image/jpeg; base64, ${category === 'student' ? user.image : user.logo}`} alt="foto" />
    </S.MainContainer>
  )
}

export default SideMenu;