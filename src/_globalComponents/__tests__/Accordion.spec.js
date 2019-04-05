import React from "react";
import { mount } from "enzyme";

import { Accordion } from "..";

describe("Accordion", () => {
  const titleProp = "Test Accordion";
  const childContent = "Child Content";

  const mountComp = overrides => {
    return mount(
      <Accordion title={titleProp} open={false} {...overrides}>
        {childContent}
      </Accordion>
    );
  };

  let wrapper;

  beforeEach(() => (wrapper = mountComp()));

  it("renders props.title and hides children on initial mount", () => {
    expect(wrapper.state().open).toBe(false);
    expect(wrapper.find(".accordionButton").exists()).toBe(true);
    expect(wrapper.find(".accordionButton").text()).toContain(titleProp);
    expect(wrapper.find(".accordionInner").exists()).toBe(true);

    expect(wrapper.find(".accordionInner").hasClass("show")).toBe(false);

    wrapper.instance().toggleAccordion();
    wrapper.update();

    expect(wrapper.find(".accordionInner").hasClass("show")).toBe(true);
  });

  describe("Class Methods", () => {
    describe("toggleAccordion", () => {
      it("toggles state.open between true and false", () => {
        expect(wrapper.state().open).toBe(false);
        wrapper.instance().toggleAccordion();
        expect(wrapper.state().open).toBe(true);
        wrapper.instance().toggleAccordion();
        expect(wrapper.state().open).toBe(false);
      });
    });
  });
});
