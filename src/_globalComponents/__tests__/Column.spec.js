import React from "react";
import { mount } from "enzyme";

import { Column } from "..";

describe("Column", () => {
  const classProp = "test-class";
  const childContent = "Child Content";

  const mountComp = overrides => {
    return mount(
      <Column className={classProp} {...overrides}>
        {childContent}
      </Column>
    );
  };

  let wrapper;

  beforeEach(() => (wrapper = mountComp()));

  it("renders a div with props.className in the className", () => {
    expect(wrapper.text()).toContain(childContent);
    expect(wrapper.props().className).toContain(classProp);
  });
});
