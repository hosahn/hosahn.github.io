import React, { FunctionComponent} from 'react'
import styled from '@emotion/styled'


export const BtnDiv1 = styled.div`
    width : 50%;
    height : 30px;
    display: flex;
    justify-content: space-between;
    margin : auto;
    margin-bottom : 50px;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 50%;
      text-align: center;
    }
`
export const HighLightOuter1 = styled.a`
z-index : 3;
  &:hover {
    background-image: linear-gradient(transparent 60%, #7490b5 40%);
  }
`;

export const Btn1 = styled.button`
  margin-right: 10px;
  z-index : 2;
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: 'EliceDigitalBaeum';
  border : 0;
  outline : 0;
  background-color : white;
`;

export type BeforeAfterType = {
    before : string,
    after : string
  }


const RelatedList: FunctionComponent<BeforeAfterType> = function ({
  before, after
}) {
    const FixedBefore = before.replace(/\./g, "").substring(2);
    const FixedAfter = after.replace(/\./g, "").substring(2);
    const beforeString = `https://hosahn.github.io/${FixedBefore}/`
    const afterString = `https://hosahn.github.io/${FixedAfter}/`
  return (
    <>
    <BtnDiv1>
    <Btn1>
    <HighLightOuter1 href = {beforeString}>PREV POST</HighLightOuter1>
    </Btn1>
    <Btn1>
    <HighLightOuter1 href = {afterString}>NEXT POST</HighLightOuter1>
    </Btn1>
    </BtnDiv1>
    </>
  )
}

export default RelatedList
