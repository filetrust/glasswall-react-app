import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import { ExpandButton } from "../ExpandButton";

const expanded = true;

const clickHandler = () => {
    console.log("expanded: " + !expanded)
};

const props = {
    expanded: expanded,
    clickHandler: clickHandler
};

test("ExpandButton_Snapshot", () => {
    // Arrange
    const component = TestRenderer.create(<ExpandButton {...props} />);

    // Act
    let tree = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("Expanded_Prop_Effects_Expandedx_Class", () => {
    // Arrange
    // Act
    const expandButtonComponent = mount(<ExpandButton {...props} />);

    // Assert
    const button = expandButtonComponent.find("button");
    expect(expandButtonComponent.find("button")).toHaveClass("expanded");
})