import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import SplashScreen from "../SplashScreen";
import GlasswallLogo from "../../GlasswallLogo/GlasswallLogo";

//TODO: test correct heading is rendered
//TODO: test correct subheading is rendered
//TODO: test children are rendered correctly

test("SplashScreen_Snapshot", () => {
    // Arrange
    const component = TestRenderer.create(<SplashScreen />);

    // Act
    let tree = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("Renders_GlasswallLogo_Component", () => {
    const wrapper = shallow(<SplashScreen />);
    expect(wrapper.find(GlasswallLogo)).toHaveLength(1);
});

// Unit Tests
test("Renders_SplashContainer_Div", () => {
    // Arrange
    const { getByTestId } = render(<SplashScreen />);

    // Act
    const logoElement = getByTestId("splashContainerDiv");

    // Assert
    expect(logoElement).toBeInTheDocument();
});

test("Renders_LogoContainer_Div", () => {
    // Arrange
    const { getByTestId } = render(<SplashScreen />);

    // Act
    const logoElement = getByTestId("logoContainerDiv");

    // Assert
    expect(logoElement).toBeInTheDocument();
});

test("Renders_HeadingContainer_Div", () => {
    // Arrange
    const { getByTestId } = render(<SplashScreen />);

    // Act
    const logoElement = getByTestId("headingContainerDiv");

    // Assert
    expect(logoElement).toBeInTheDocument();
});