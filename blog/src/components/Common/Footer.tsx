import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 200px;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  color : white;
  background-color : black;
  opacity : 0.7;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 Developer Hosan.
    </FooterWrapper>
  )
}

export default Footer