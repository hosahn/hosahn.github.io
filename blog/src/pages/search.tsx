import React from 'react'
import Template from 'components/Common/Template'
import Search from 'components/Main/Search'
const Contact = () => 
{

 return  (
      <Template
      title= "About"
      description= "About Hosan"
      url= ""
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
