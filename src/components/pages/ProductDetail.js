import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import {FaIdCard, FaHome, FaScroll} from "react-icons/fa";

import ProductType from "Models/types/ProductType";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Footer from "../organism/Footer";
import BreadCrumb from "../atoms/BreadCrumb";

// import HeroImage from "../../assets/hero.jpg"

import  Callout, {
    CalloutMedia, 
    CalloutBody, 
    CalloutAction } from "../atoms/Callout";
import Button from "../atoms/Button";
import SpeedImage from "../../draws/Speed";

const PinnedList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const PinnedItem = styled.li`
    display: inline-block;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 16px 0;

    svg {
        margin-right: 8px;
        vertical-align: middle;
    }

`;

const ProductDetail = ( {product} ) => (
    <>
    <Hero image={product.image}>
        <Heading>
            <h1>{product.title}</h1>
        </Heading>
        <BreadCrumb items={[
            { label: "Início", link: "/" }, 
            { label: "Serviço" },
            { label: product.title}
        ]}/>
    </Hero>
    <Section>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor porro magni harum obcaecati. Dicta libero expedita excepturi, voluptate ut et minima aliquam cum dolorem. Consequuntur sapiente iure tenetur dolorum repellendus!</p>
        <p>Cupiditate tempora quos sit molestias id tenetur blanditiis. Architecto quod, voluptas, quasi repellendus quis beatae distinctio veritatis dignissimos vel magnam ea temporibus reprehenderit voluptate aperiam tempore eos aliquam nemo. Reprehenderit.</p>
        <p>Distinctio optio, animi sapiente a expedita praesentium quod. Fuga alias labore sapiente eum dolor numquam corporis voluptates, vitae mollitia maiores cumque quisquam, facilis non! Minus, voluptates. Ipsum officiis eaque eos!</p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
            <PinnedItem>
                <FaIdCard/>
                    RG
            </PinnedItem>
            <PinnedItem>
                <FaIdCard/> 
                CPF
            </PinnedItem>
            <PinnedItem>
                <FaScroll/> 
                Cert. Nascimento ou Casamento
            </PinnedItem>
            <PinnedItem>
                <FaHome/>
                Compr. Residência
            </PinnedItem>
        </PinnedList>
    </Section>
    <Section inverse>
        <Callout>
            <CalloutBody>
                <h6>Faça sua matrícula agora mesmo</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste ea neque exercitationem magnam fugit, quam amet qui maiores aliquid impedit consequuntur totam, perferendis odio assumenda accusamus. Aut, ad asperiores.</p>
                <CalloutAction>
                    <Button color="primary">Matricular</Button>
                </CalloutAction>
            </CalloutBody>
            <CalloutMedia>
                <SpeedImage />
            </CalloutMedia>
        </Callout>
    </Section>
    <Footer/>
    </>
);

ProductDetail.defaultProps = {
    product: {}
};

ProductDetail.propTypes = {
    product: ProductType
};

export default ProductDetail
