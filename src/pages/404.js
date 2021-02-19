import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { Button } from "../components/Button"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from "gatsby"



const NotFoundPage = () => {
const data = useStaticQuery(graphql`
query MyQuery {
  allPage404Json {
    edges {
      node {
        alt
        button
        desc
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`);

function getContent404(data){
  const content404 = [];
  data.allPage404Json.edges.forEach((item, index) => {
    content404.push(
            <Content404 key={index}>
              <Picture404 src={item.node.img.childImageSharp.fluid.src}
              fluid={item.node.img.childImageSharp.fluid}
              alr={item.node.alt}/>
              <Description404>{item.node.desc}
                  <Button to="/" primary="true" round="true" css={`
                    display: flex;
                  `}>
                      {item.node.button}
                  </Button>
              </Description404>
              
            </Content404>
    )
  }) 
  return content404;
}

return(
  <Layout>
    <SEO title="404: Not found" />
    <Container404>
      <Wrapper404>
        {getContent404(data)}

      </Wrapper404>

    </Container404>
    
  </Layout>
  )
};

export default NotFoundPage

const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background: #0c0c0c;
  height: 100vh;
  margin-top: -80px;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr; 
  }
`


const Wrapper404 = styled.div`
color: #fff;
line-height: 2;
`

const Content404 = styled.div`
display: flex;
  color: #fff;
  width: 75%;
  height: 85%;
  margin: 100px;
  position: relative;

  @media screen and (max-width: 768px){
    display: grid;
    margin: 50px;
  }
`

const Picture404 = styled(Img)`
height: 80%;
width: 80%;
position: relative;
filter: brightness(80%);

@media screen and (max-width: 768px){
  margin-top: 3rem;
  height: 75%;
  width: 75%;
}

`
const Description404 = styled.div`
  justify-content: center;
  font-size: clamp(1rem, 3vw, 2rem);
  margin-top: 100px;

  @media screen and (max-width: 768px){
    margin-top: 5px;
  }
`
