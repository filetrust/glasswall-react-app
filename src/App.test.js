import React from "react";
import { render } from "@testing-library/react";
import {shallow} from "enzyme";
import App from "./App";
import GlasswallLoginLogo from "./components/GlasswallLoginLogo/GlasswallLoginLogo";

test("Renders_GlasswallLoginLogo_Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(GlasswallLoginLogo)).toHaveLength(1);
});

test("Renders_Title", () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Glasswall-React-App/i);
    expect(titleElement).toBeInTheDocument();
});