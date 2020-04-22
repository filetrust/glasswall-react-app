import React from "react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import { Nav } from "../Nav";

const expanded = true;
const bottom = false;

const props = {
    expanded: expanded,
    bottom: bottom
};

test("Nav_Snapshot", () => {
    // Arrange
    const component = TestRenderer.create(<Nav {...props} />);

    // Act
    let tree = component.toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
});

test("Displays_Correct_Props", () => {
    // Arrange
    // Act
    const expandButtonComponent = mount(<Nav {...props}/>);

    // Assert
    expect(expandButtonComponent.prop("expanded")).toEqual(props.expanded);
    expect(expandButtonComponent.prop("clickHandler")).toEqual(props.clickHandler);    
});