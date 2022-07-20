import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import SearchPostList from "./SearchPostList"
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
    <div>
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInputChange}
          />
      {state.query && (
        <div>
          {renderSearchResults()}
        </div>
      )}
    </div>
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