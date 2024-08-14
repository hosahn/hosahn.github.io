import styled from "@emotion/styled";
import { Link } from "gatsby";
export const NavWrap = styled.div`
position:-webkit-sticky;
position:sticky;
z-index : 1;
top:0;
  width : 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #7490b5;
  button {
    border: none;
    margin-right: 30px;
    background-color: transparent;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

export const Btn = styled.button`
  margin-right: 10px;
  z-index : 2;
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: 'EliceDigitalBaeum';
`;

export const UserBtn = styled.button`
z-index : 2;
  color: white;
  font-size: 25px;
`;

export const HighLight = styled(Link)`
z-index : 3;
  &:hover {
    background-image: linear-gradient(transparent 60%, white 40%);
  }
`;

export const HighLightOuter = styled.a`
z-index : 3;
  &:hover {
    background-image: linear-gradient(transparent 60%, white 40%);
  }
`;


const Menu1 = function() {
    return (
        <NavWrap>
          <Btn>
            <HighLight to = "/">Main</HighLight>
          </Btn>
          <Btn>
            <HighLight to = "/search">Search</HighLight>
          </Btn>
          <Btn>
            <HighLightOuter href = "https://github.com/hosahn">Github</HighLightOuter>
          </Btn>
          <Btn>
            <HighLightOuter href = "https://bottlenose-apology-5f4.notion.site/6cefa80ae2a642b8b2523495d3d4bcef">About</HighLightOuter>
          </Btn>
          <Btn>
            <HighLight to = "/contact">Contact</HighLight>
          </Btn>
        </NavWrap>
      );
}

export default Menu1