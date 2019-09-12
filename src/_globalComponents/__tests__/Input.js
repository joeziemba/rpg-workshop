import React from "react";
import { mount } from "enzyme";

import Input from "../Input";

describe("Input", () => {
  const testProps = {
    type: "text",
    id: "testId",
    placeholder: "test placebolder",
    onChange: jest.fn(),
    value: "Test Value",
    fieldName: "testFieldName",
    label: "Test Label"
  };

  const mountComponent = overrides => {
    return mount(<Input {...testProps} {...overrides} />);
  };
  let wrapper;
  beforeEach(() => (wrapper = mountComponent()));

  it("renders input with correct props", () => {
    expect(wrapper.find("input").props().type).toEqual(testProps.type);
    expect(wrapper.find("input").props().id).toEqual(testProps.id);
    expect(wrapper.find("input").props().onChange).toEqual(testProps.onChange);
    expect(wrapper.find("input").props().placeholder).toEqual(
      testProps.placeholder
    );
    expect(wrapper.find("input").props().value).toEqual(testProps.value);
    expect(wrapper.find("input").props().name).toEqual(testProps.fieldName);
  });

  it("renders a label with props.label as text", () => {
    let label = wrapper.find("label");
    expect(label.text()).toEqual(testProps.label);
  });

  it("renders a label with props.id as htmlFor", () => {
    let label = wrapper.find("label");
    expect(label.props().htmlFor).toEqual(testProps.id);
  });

  it("renders a label with props.label", () => {
    expect(wrapper.find("label").text()).toEqual(testProps.label);
  });
});
