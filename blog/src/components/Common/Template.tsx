import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Menu1 from './Nav'
import { Helmet } from 'react-helmet'

const favicon = require("../../../static/favicon.png").default;

type TemplateProps = {
    title: string
    description: string
    url: string
    image: string
    children: ReactNode
  }

  const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
    title,
    description,
    url,
    image,
    children,
  }) {
    return (
      <Container>
        <Helmet>
          <title>{title}</title>
  
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
  
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content={title} />  
          <html lang="ko" />

          <meta name="twitter:card" content="summary" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
        <link rel="shortcut icon" href={favicon}/>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@Hosan" />
        <meta name="twitter:creator" content="@Hosan" />
        <meta name="google-site-verification" content="FCIdHVjw_jBPbB0l6gXODqTFlM47h7YaiUfT1hIZqfI" />
        <meta name="naver-site-verification" content="aaa42c74638f5011238f2979942a4c6bb674bee0" />
        </Helmet>
        <GlobalStyle />
        <Menu1 />
        {children}
        <Footer />
      </Container>
    )
  }
  
  export default Template