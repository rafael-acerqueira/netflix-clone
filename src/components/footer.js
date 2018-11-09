import React from 'react'
import styled from 'styled-components'

import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    &copy; 2018
  </Footer>
)

const Footer = styled.footer`
  align-items: center;
  background: #333;
  color: #FFF;
  display: flex;
  height: ${footerHeight};
  justify-content: center;
  background: #333;
  padding: 0 10px;
`

export default MainFooter
