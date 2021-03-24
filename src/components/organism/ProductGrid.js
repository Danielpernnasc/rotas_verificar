import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProductType from 'Models/types/ProductType';

import Grid from "../atoms/Grid";
import Card, { CardMedia, CardBody } from "../atoms/Card";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";


const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <Card>
              <CardMedia image={product.image} />
              <CardBody>
                <Heading>
                  <h6>{product.title}</h6>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button as={Link} to={`/Servicos/${product.slang}`} color="primary" variant="link">
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button
            variant="outlined"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Lista completa de serviços
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: []
};

ProductGrid.propTypes = {
  product: PropTypes.arrayOf(
    ProductType
  )
};

export default ProductGrid;
