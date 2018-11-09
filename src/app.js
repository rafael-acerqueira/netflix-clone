'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import MainFooter from 'components/footer'
import Videoslist from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header />

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <Videoslist />
    </Main>

    <MainFooter />
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Container = styled.div`
  height: 100%;
`

export default App
