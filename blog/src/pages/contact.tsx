import axios from 'axios';
import Template from 'components/Common/Template'
import React, { FunctionComponent, useRef, useState } from "react";
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';


const ABForm = styled.input`
font-size: 18px;
padding: 10px;
margin: 10px;
width : 500px;
background: white;
border: none;
border-radius: 3px;
::placeholder {
  color: white;
}
`

const ABArea = styled.textarea`
font-size: 18px;
padding: 10px;
margin: 10px;
background: white;
border: none;
width : 500px;
height : 500px
border-radius: 3px;
::placeholder {
  color: black;
}
`

const ABLabel = styled.label`
`

const SubBt = styled.button`
background: #0066A2;
color: white;
border-style: outset;
border-color: #0066A2;
height: 50px;
width: 100px;
font: bold15px arial,sans-serif;
text-shadow: none;
:hover & {
  opacity: 0.7;
}
`

const ABDiv = styled.div`
  margin : auto;
  align-items : center;
  padding: 10px 0px;
  width : 500px;

`
const InfoDiv = styled.div`
  margin-left : auto;
  margin-right :auto;
  text-align : center;
  margin-top: 100px;
  width : 1000px;
  background-color : blue;
  item-align :
`

const FullDiv = styled.div`
margin-top : 30px;
height : 100vh;
width : 1000px;
margin-left :auto;
margin-right : auto;
background-color : grey;
`

type ContactPageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const ContactForm: FunctionComponent<ContactPageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const headers = {
    'Content-Type' : 'application/json',
  }
  const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLInputElement
    setEmail(element.value)

  }
  
  const nameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLInputElement
    setName(element.value)
  }

  const messageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLTextAreaElement
    setMessage(element.value)
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email == "" || name == "" || message == ""){
      window.confirm("Please fill the entire fields");
      return
    }
    else {
    const result = await axios.post('https://bloghosanback.herokuapp.com/contact', {
      email : email,
      name : name,
      message : message,
    }, {
      headers:headers // headers에 headers 객체 전달
  })
    let confirmMessage = result ? "Email has been sent" : "An Error Occured, Please try it again."
    window.confirm(confirmMessage);
}
  };

  return (
    <Template title= "Contact"
    description= "Contact Me"
    url= ""
    image= "">
      <Introduction profileImage={gatsbyImageData} />
      <FullDiv>
    <form ref={form} onSubmit={sendEmail}>
      <ABDiv>
      <ABLabel>Name</ABLabel>
      </ABDiv>
      <ABDiv>
      <ABForm type="text" name="user_name" onChange={(e) => nameHandler(e)} />
      </ABDiv>
      <ABDiv>      
      <ABLabel>Email</ABLabel>
      </ABDiv>
      <ABDiv>      
      <ABForm type="email" name="user_email" onChange={(e) => emailHandler(e)} />
      </ABDiv>
      <ABDiv>
      <ABLabel>Message</ABLabel>
      </ABDiv>
      <ABDiv>
      <ABArea name="message" onChange={(e) => messageHandler(e)} />
      <SubBt type="submit">Send</SubBt>
      </ABDiv>
    </form>
    </FullDiv>
    </Template>
  );
};

export default ContactForm;

export const getPostList = graphql`
query getImage {
  file(name: { eq: "profile-image" }) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }
    publicURL
  }
}
`;
