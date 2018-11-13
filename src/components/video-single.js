import React from 'react'
import styled from 'styled-components'

const VideoSingle = ({ id, title }) => (
  <Container>
    <Iframe width='560' height='480' src={`https://www.youtube.com/embed/${id}`} frameBorder='0' allowFullScreen />
    <Title>{title}</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  width: 100%;
`

const Title = styled.h2`
  padding: 10px;
`

export default VideoSingle
