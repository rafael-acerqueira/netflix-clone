'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Videoslist from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>React Clone</HeaderTitle>
      <RegisterButton>
        Cadastrar Vídeo
      </RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <Videoslist />
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const headerHeight = '60px'
const footerHeight = '30px'

const Header = styled.header`
  background: #333;
  display: flex;
  height: ${headerHeight};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

const Container = styled.div`
  height: 100%;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  color: #FFF;
`

export default App
