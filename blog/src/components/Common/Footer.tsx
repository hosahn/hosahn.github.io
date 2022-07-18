import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
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
    <div>
    <FooterWrapper>
      Thank You for Visiting My Blog Powered By Gatsby, Have a Good Day 😆
      <br /><a target="_blank" href="https://icons8.com/icon/37287/footman"> © 2022 Hosan Lee, Munich. Footman icon by Icons8</a>
    </FooterWrapper>
  </div>
  )
}

export default Footer