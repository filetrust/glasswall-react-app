import React from "react";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";

import GlasswallModal from "../GlasswallModal";

const onClickOutside = () => {
    console.log("modal closed");
};

const props = {
    isOpen: true,
    onClickOutside: onClickOutside
};