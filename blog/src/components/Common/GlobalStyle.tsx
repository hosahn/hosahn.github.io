import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    border: 1px solid black;
    margin: 1rem 0; /* Space around images */
    margin-top: 2.0rem;
    margin-bottom: 2.0rem; 
  }

  /* Improve spacing for headings */
  body h1, body h2, body h3, body h4, body h5, body h6 {
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;  /* Add !important to ensure this takes effect */
    color: #222;
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }
  p {
    margin-bottom: 1.0rem; /* Add spacing between paragraphs */
    line-height: 1.5; /* Adjust line spacing within paragraphs */
  }
  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: #666;
    line-height: 1.8; /* Line spacing within blockquotes */
  }
  ul, ol {
    margin: 0; /* Remove default margins to reduce space */
    padding-left: 1.5rem; /* Maintain padding for list markers */
    line-height: 1.8; /* Maintain line height for readability */
    margin-bottom: 0rem; /* Add small space after lists */
  }
    

  li {
    margin-bottom: 0.75rem; /* Add space between list items */
  }

`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
