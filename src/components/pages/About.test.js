import React from 'react';

import { render, screen } from "../test-utils";
import About from './About';

beforeEach(() => {
    jest.resetAllMocks();
});

test("renders About page", () => {
    render(<About />);
    expect(screen.getByText("Auto Escola Nascimento")).toBeInTheDocument();
});


test("scrolls to top in first render", () =>{
    render(<About />);
    expect(window.scrollTop).toBeCalledTimes(0);
});
