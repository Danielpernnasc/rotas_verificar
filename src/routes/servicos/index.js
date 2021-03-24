import React from "react";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "Hooks/scroll";
import { useProduct } from "Hooks/products";

import ProductPage from 'components/pages/ProductDetail';

const Product = () => {
    useScrollToTop();
    const { slang } = useParams();
    const product = useProduct({ slang });

    return <ProductPage product={product}/>;
};


export default Product;
