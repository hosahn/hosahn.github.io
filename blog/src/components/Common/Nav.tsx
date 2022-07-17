import styled from "@emotion/styled";

export const NavWrap = styled.div`
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
`;

export const Btn = styled.button`
  margin-right: 10px;
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: 'EliceDigitalBaeum';
`;

export const UserBtn = styled.button`
  color: white;
  font-size: 25px;
`;

export const HighLight = styled.div`
  &:hover {
    background-image: linear-gradient(transparent 60%, white 40%);
  }
`;

const Menu1 = function() {
    return (
        <NavWrap>
          <Btn>
            <HighLight>Main</HighLight>
          </Btn>
          <Btn>
            <HighLight>Search</HighLight>
          </Btn>
          <Btn>
            <HighLight>Github</HighLight>
          </Btn>
          <Btn>
            <HighLight>About</HighLight>
          </Btn>
          <Btn>
            <HighLight>Contact</HighLight>
          </Btn>
        </NavWrap>
      );
}

export default Menu1