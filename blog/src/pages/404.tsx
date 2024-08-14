import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'


const Body = styled.body`
margin : auto;
`

const Div = styled.div`
width: 100%;
text-align: center
margin : auto;
`
const Number = styled.div`
background: #fff;
position: $rl;
font: 900 30vmin 'Consolas';
letter-spacing: 5vmin;
text-shadow: multiple-shadow(8);
@include _pseudo-uncomplete($bf, $bl){
    background-color: #673ab7;
    background-image: radial-gradient(closest-side at 50% 50%, #ffc107 100%, rgba(0, 0, 0, 0)),
                      radial-gradient(closest-side at 50% 50%, #e91e63 100%, rgba(0, 0, 0, 0));
    background-repeat: $rpx;
    background-size: 40vmin 40vmin;
    background-position: -100vmin 20vmin, 100vmin -25vmin;
    @include _dimension(100%);
    mix-blend-mode: screen;
    @include _animation(moving, 10s linear infinite both, to){
        background-position: 100vmin 20vmin, -100vmin -25vmin
    }
}
`
const Text = styled.div`
font-size : 10vmin
margin : auto;
`

const NotFound = () => (
    <Body>
        <Div>
        <Number>404</Number>
        <Text>Oops... Page Not Found</Text>
        </Div>
        <Link to="/">Go Home</Link>
    </Body>
);

export default NotFound;