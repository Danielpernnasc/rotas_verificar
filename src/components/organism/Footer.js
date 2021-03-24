import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "../atoms/Container";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nascimento Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus perferendis rem unde. Labore, odit? Alias optio
            corporis itaque.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (11) 96711-9004
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aut minima
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/daniel.nascimento.5682"
              >
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.instagram.com/dan__pernasc/"
              >
                <IconContainer>
                  <FaInstagram />
                </IconContainer>
                Instagram
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.youtube.com/channel/UCDo_wRSZiRCBnnB0oQWa8NQ"
              >
                <IconContainer>
                  <FaYoutube />
                </IconContainer>
                Youtube
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
