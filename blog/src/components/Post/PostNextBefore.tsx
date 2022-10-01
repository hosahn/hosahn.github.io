import React, { FunctionComponent} from 'react'

export type BeforeAfterType = {
    before : string,
    after : string
  }


const RelatedList: FunctionComponent<BeforeAfterType> = function ({
  before, after
}) {
    const beforeString = `https://hosahn.github.io.${before}`
    const afterString = `https://hosahn.github.io.${after}`
  return (
    <>
    <a href={beforeString}>이전 글</a>
    <a href={afterString}>다음 글</a>
    </>
  )
}

export default RelatedList
