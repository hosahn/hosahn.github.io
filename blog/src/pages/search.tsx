import React from 'react'
import Template from 'components/Common/Template'
import Search from 'components/Main/Search'
const Contact = () => 
{

 return  (
      <Template
      title= "Search"
      description= "Search Posts about algorithms, cyber security, backend ... and much more"
      url= "https://hosahn.github.io/search"
      image= ""
      >
                  <Search />
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
