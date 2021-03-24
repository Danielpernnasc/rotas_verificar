import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import ProductType from 'Models/types/ProductType';

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

import Grid from "../atoms/Grid";
import Feature from "../atoms/Feature";
import Section from "../molecules/Section";
import Footer from "../organism/Footer";
import ProductGrid from "../organism/ProductGrid";
import Accordion, { AccordionGroup } from "../atoms/Accordion";
import HeroImage from "../../assets/hero.jpg";

import AboutVideo from "../../assets/road.mp4";


const Home = ({ products }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente Localização">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h4>Nascimento Auto Escola</h4>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            aliquam ab culpa quaerat amet asperiores quia animi ex corporis odit
            facilis deserunt atque facere! Optio aliquam perferendis sunt dicta
            in.
          </p>
          <div>
            <Button as={Link} to="/Sobre"  color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            loop
            muted
            playsInline
            alt="Video by Ruvim Miksanskiy from Pexels"
          ></video>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Duvidas recorrentes</h2>
      </Heading>
        <AccordionGroup>  
          <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
          <Accordion title="Como faço a mudanaça de categoria?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
          <Accordion title="Fui multado e agora?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolores pariatur aut porro, iure optio consectetur repellat error
            quisquam sapiente dolorum quibusdam exercitationem commodi, voluptates
            asperiores facere sunt deserunt nesciunt.
          </Accordion>
        </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products:[]
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType)
};

export default Home;
