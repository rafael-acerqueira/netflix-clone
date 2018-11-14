'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import MainFooter from 'components/footer'
import Videoslist from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'
import { fetchVideos } from 'reducers/videos/action-creator'

import 'normalize.css'
import 'milligram'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterVideoFormOpened, videoSingleId, videos } = this.props

    return (
      <Container>
        <Header />

        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          { videoSingleId &&
            <VideoSingle
              id={videoSingleId}
              title={videos[videoSingleId].title} />
          }
          <Videoslist />
        </Main>

        <MainFooter />
      </Container>
    )
  }
}

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
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

// const mapDispatchToProps = (dispatch) => ({
//   fetchVideos: () => dispatch(fetchVideos())
// })
const mapDispatchToProps = { fetchVideos }

export default connect(mapStateToProps, mapDispatchToProps)(App)
