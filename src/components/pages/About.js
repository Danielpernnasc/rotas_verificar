import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Footer from "../organism/Footer";
import Card, {CardMedia, CardMediaDescription } from "../atoms/Card";
import BreadCrumb from "../atoms/BreadCrumb";

import HeroImage from "../../assets/hero_about.jpg";
import AboutImage from "../../draws/Transito";
import InstImage1 from "../../assets/instructors/instru1.jpg";
import InstImage2 from "../../assets/instructors/instru2.jpg";
import InstImage3 from "../../assets/instructors/instru3.jpg";
import InstImage4 from "../../assets/instructors/instru4.jpg";
import InstImage5 from "../../assets/instructors/instru5.jpg";
import InstImage6 from "../../assets/instructors/instru6.jpg";


const ImageContainer = styled.div`
  svg{
    width: 100%;
    height: auto;
    max-width: 500px;
    color: ${props => props.theme.colors.primary.main};
  }
`;

const instructors = [
  {id: 1, name: "Steve", avatar: InstImage1,},
  {id: 2, name: "Tony", avatar: InstImage2,},
  {id: 3, name: "Thor", avatar: InstImage3,},
  {id: 4, name: "Bruce", avatar: InstImage4,},
  {id: 5, name: "Clint", avatar: InstImage5,},
  {id: 6, name: "Wanda", avatar: InstImage6,},

]


const About = () => (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Auto Escola Nascimento</h1>
        </Heading>
        <BreadCrumb items={[
          { label: "Início", link: "/" }, 
          { label: "Sobre" }
        ]} />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius id maiores similique deserunt vel possimus, earum molestias animi incidunt aspernatur et consequuntur recusandae ad, sint atque exercitationem eaque nihil. Omnis.</p>
            <p>Impedit cum laudantium dignissimos illum sunt explicabo eligendi velit nemo dolorum veniam tenetur aliquid, iusto voluptate repudiandae sapiente sequi rerum sint alias. Eaque architecto voluptatibus voluptate labore excepturi maxime ab.</p>
            <p>Voluptatibus, sit? Eum, ducimus laudantium? Nobis ducimus distinctio reiciendis totam nesciunt! Voluptatibus dolor nobis, aut molestiae rerum ea cum alias eveniet nulla consequatur in laudantium quas dolore, quam iusto quae.</p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit consequuntur, vitae minus fugit possimus cupiditate laboriosam doloremque recusandae.</p>
            <center>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>
      <Section inverse>
          <Grid md={2}>
            <div>
              <h4>Missão</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut tenetur doloribus eaque dolores ex amet fuga, dignissimos ratione ducimus itaque, ad commodi maiores asperiores. Magni, ducimus. Quisquam, reiciendis totam.</p>
            </div>
            <div>
              <h4>Visão</h4>
              <p>Mollitia ex in aliquid nobis praesentium similique debitis porro eveniet veniam, minima qui pariatur libero eos corrupti doloribus, expedita natus sed? Molestias eum eligendi quia velit maiores nam consectetur dolore?</p>
            </div>
          </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>
                    {instructor.name}
                  </h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </> 
  );
// About.defaultProps = {};

// About.propTypes = {};

export default About
