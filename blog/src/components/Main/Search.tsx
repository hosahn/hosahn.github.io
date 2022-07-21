import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import SearchPostList from "./SearchPostList"
import styled from "@emotion/styled";
import { PostListItemType } from "types/PostItem.types";

export type SearchPageProps = {
    location: {
      search: string
    }
    data: {
      allMarkdownRemark: {
        edges: PostListItemType[]
      }
    }
  }

type SearchMeta =  {
    query : "",
    filteredData : PostListItemType[]
}

const SEMDiv =  styled.div`
display:block;
height: auto;
`

const FullDiv = styled.div`
margin: auto;
margin-top : 70px;
font-family: -apple-system, Arial, sans-serif;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: left;
background-color: #fff;
padding: 30px;
padding-bottom: 10px;
border: 1px solid #ced4da;
border-radius: 0.25rem;
max-width: 100%;
width : 70%;
height: 80%;
`
const INPUTGroup = styled.div`
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: stretch;
align-items: stretch;
width: 100%;
`
const ABForm = styled.input`
display: block;
width: 100%;
height: calc(1.5em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
outline: none;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:focus {
  border: 1px solid #313131;
}
`

const ABLabel = styled.label`
display: inline-block;
margin-bottom: 0.5rem;
`



const Search = (props : SearchPageProps) => {
  const emptyQuery = "";

  const [state, setState] = useState<SearchMeta>({
    filteredData : [],
    query: emptyQuery,
  });

  const handleInputChange = (event : any) => {
    const query = event.target.value;
    const { data } = props;
    const posts = data.allMarkdownRemark.edges || [];

    const filteredData : PostListItemType[] = posts.filter((post : PostListItemType) => {
      const { summary, title, categories} = post.node.frontmatter;
      return (
        (summary &&
          summary.toLowerCase().includes(query.toLowerCase())) ||
        (title && title.toLowerCase().includes(query.toLowerCase())) ||
        (categories && categories.join("").toLowerCase().includes(query.toLowerCase()))
      );
    });

    setState({
      query,
      filteredData,
    });
  };

  const renderSearchResults = () => {
    const { query, filteredData } = state;
    const hasSearchResults = filteredData && query !== emptyQuery;
    const posts : PostListItemType[] = hasSearchResults ? filteredData : [];
    return (
      posts &&
      <SearchPostList posts = {posts} />
    );
  };

  return (
    <>
    <FullDiv>
      <SEMDiv>
        <INPUTGroup>
          <ABLabel>Search Your Beloved Posts</ABLabel>
          <ABForm
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInputChange}
          />
          </INPUTGroup>
        </SEMDiv>
</FullDiv>
      {state.query && (
        <div>
          {renderSearchResults()}
        </div>
      )}
</>
  );
};

export default (props : any) => (
  <StaticQuery
    query={graphql`
    query abc {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
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
  `}
    render={(data) => <Search data={data} {...props} />}
  />
);