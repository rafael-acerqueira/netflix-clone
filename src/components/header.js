import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'
import { openRegisterVideo } from 'reducers/ui/action-creators'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>React Clone</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>
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

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: (e) => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
