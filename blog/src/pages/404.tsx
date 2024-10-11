import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'
import MySvg from '../assets/404.svg'; 

const Body = styled.body`
margin : auto;
`

const NotFound = () => (
    <Body>
        <div>
        <img src={MySvg} alt="svg" />
        <Link to="/">Back to Home Home</Link>
        </div>
    </Body>
);

export default NotFound;
