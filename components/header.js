import React from 'react'
import styled from 'styled-components'
import Title from '../components/title'
import AppIcon from '../components/app_icon'

const HeaderContainer = styled.header`
  display: block;
  width: 640px;
  margin: 70px auto 24px;

  @media all and (max-width: 660px) {
    width: 300px;
  }
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <AppIcon />
      <Title>
        <a href="/" rel="home">Dim</a>
      </Title>
    </HeaderContainer>
  )
}

export default Header
