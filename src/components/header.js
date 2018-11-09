import React from 'react'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'

const MainHeader = () => (
  <Header>
    <HeaderTitle>React Clone</HeaderTitle>
    <RegisterButton>
      Cadastrar Vídeo
    </RegisterButton>
  </Header>

)

const Header = styled.header`
  background: #333;
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  color: #FFF;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

export default MainHeader
