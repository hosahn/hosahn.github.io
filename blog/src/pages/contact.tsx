
import Template from 'components/Common/Template'
import React, { FunctionComponent, useRef, useState } from "react";
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import emailjs from '@emailjs/browser';

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


const ABArea = styled.textarea`
font-size: 18px;
padding: 10px;
margin: 10px;
color :#495057
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
outline: none;
width : 100%;
height : 500px
border-radius: 3px;
::placeholder {
  color: black;
}
&:focus {
  border: 1px solid #313131;
}
`

const ABLabel = styled.label`
display: inline-block;
margin-bottom: 0.5rem;
`

const SubBt = styled.button`
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent black;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:hover {
  background-color: grey;
}
`

const ABDiv = styled.div`
margin-bottom: 1rem;
`

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

const H1 = styled.h1`
text-align : center
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

  const sendEmail = async (e:any) => {
      e.preventDefault();
      const serviceId : string = 'service_msuqzo9';
      const templateId : string = 'template_tv2z1va';
      const publicKey : string = 'Vyi75khtxAhxilOrs';
      const templateParams :  Record<string, unknown>=  {
        from_name : name,
        from_email : email,
        to_name: 'Hosan Lee',
        message: message + email + name
      };
      emailjs.send(serviceId, templateId,templateParams, publicKey).then(() => {
          alert('Email sent successfully! returning...')
          setName('');
          setEmail('');
          setMessage('');
          window.location.reload()
      })
      .catch(() => {
        alert('Error sending email, please try again later');
      });
  };

  return (
    <Template title= "Contact"
    description= "Contact Hosan"
    url= "https://hosahn.github.io/about"
    image= "">
      <Introduction profileImage={gatsbyImageData} />
      <H1>.</H1>
      <H1>.</H1>        
      <H1>.</H1>        
      <H1>Do you have an interest in my work or have a question?</H1>    
  
      <FullDiv>
        <SEMDiv>
        <H1>Contact Me!</H1>    
      <form ref={form} onSubmit={sendEmail}>
        
      <ABDiv>
      <ABLabel>Name</ABLabel>
      <INPUTGroup>
      <ABForm type="text" name="user_name" onChange={(e) => nameHandler(e)} />
      </INPUTGroup>
      </ABDiv>
      <ABDiv>      
      <ABLabel>Email</ABLabel>
      <INPUTGroup>     
      <ABForm type="email" name="user_email" onChange={(e) => emailHandler(e)} />
      </INPUTGroup>
      </ABDiv>
      <ABDiv>
      <ABLabel>Message</ABLabel>
      <INPUTGroup>
      <ABArea name="message" onChange={(e) => messageHandler(e)} />
      </INPUTGroup>
      <SubBt type="submit">Send</SubBt>
      </ABDiv>
      Your personal information is not going to be saved in any form.
    </form>
    </SEMDiv>
    </FullDiv>
    </Template>
  );
};

export default ContactForm;

export const getAboutList = graphql`
query getImage {
  file(name: { eq: "profile-image" }) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }
    publicURL
  }
}
`;
