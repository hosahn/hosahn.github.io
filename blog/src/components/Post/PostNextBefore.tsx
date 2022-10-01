import React, { FunctionComponent} from 'react'
import { HighLightOuter } from 'components/Common/Nav'
import { Btn } from 'components/Common/Nav'
import styled from '@emotion/styled'


export const BtnDiv1 = styled.div`
    width : 700px;
    height : 30px;
    display: flex;
    justify-content: space-between;
    margin : auto;

`
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
    <Btn>
    <HighLightOuter href = {beforeString}>이전 글</HighLightOuter>
    </Btn>
    <Btn>
    <HighLightOuter href = {afterString}>다음 글</HighLightOuter>
    </Btn>
    </BtnDiv1>
    </>
  )
}

export default RelatedList
