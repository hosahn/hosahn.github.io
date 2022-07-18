import React from 'react'
import Template from 'components/Common/Template'
const About = () => 
{

 return  (
      <Template
      title= "About"
      description= "About Hosan"
      url= ""
      image= ""
      >
          <div style={
          {
            "width" : "20px",
            "height" : "200vh"
          }
        }>
About Page is now being developed
<a target="_blank" href="https://icons8.com/icon/37287/footman">Footman</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
      </ Template>
  )

}

export default About
