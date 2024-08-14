import React, { FunctionComponent } from 'react'
import Template from 'components/Common/Template'
import Search from 'components/Main/Search'
import Introduction from 'components/Main/Introduction'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

type SearchPageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const Contact: FunctionComponent<SearchPageProps> = (
  {
    data: {
      file: {
        childImageSharp: { gatsbyImageData },
      },
    },
  }
) => 
{

 return  (
      <Template
      title= "Search"
      description= "Search Posts about algorithms, cyber security, backend ... and much more"
      url= "https://hosahn.github.io/search"
      image= ""
      >
        <Introduction profileImage={gatsbyImageData} />  <Search />
        <div style={
          {
            "width" : "20px",
            "height" : "200vh"
          }
        }>
        </div>
      </ Template>
  )

}

export default Contact

export const getSearchList = graphql`
query getPostLists {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
  allMarkdownRemark(
   sort: {frontmatter: {date: DESC} }  
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD.")
          categories
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
        }
      }
    }
  }
  file(name: { eq: "profile-image" }) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }
    publicURL
  }
}
`;
