'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import MainFooter from 'components/footer'
import Videoslist from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'

const App = ({ isRegisterVideoFormOpened }) => (
  <Container>
    <Header />

    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
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

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

export default connect(mapStateToProps)(App)
