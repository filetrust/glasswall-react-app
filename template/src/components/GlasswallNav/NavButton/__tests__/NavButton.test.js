import React from "react";
import { shallow, mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import { NavButton } from "../NavButton";

const selected = true;

const clickHandler = () => {
    console.log("click handled.")
};

const props = {
    selected: selected,
    clickHandler: clickHandler
};

test("NavButton_Snapshot", () => {
    // Arrange
    const component = TestRenderer.create(<NavButton {...props} />);

    // Act
    let tree = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("Displays_Correct_Props", () => {
    // Arrange
    // Act
    const expandButtonComponent = mount(<NavButton {...props}/>);

    // Assert
    expect(expandButtonComponent.prop("selected")).toEqual(props.selected);
    expect(expandButtonComponent.prop("clickHandler")).toEqual(props.clickHandler);    
});