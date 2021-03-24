import React from "react";

import { render, screen } from "../test-utils";
import ProductDetail from './ProductDetail';

test('renders ProductDetail page', ({product}) => {
  render(<ProductDetail />);
  expect (screen.getByText('Nossos Serviços')).toBeInTheDocument();
});
