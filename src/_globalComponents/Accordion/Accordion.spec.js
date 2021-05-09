import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Accordion from "./Accordion";

const titleProp = "Test Accordion";
const childContent = "Child Content";

jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn((props) =>
    props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  );
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

const renderComp = (overrides) => {
  return render(
    <Accordion title={titleProp} open={false} {...overrides}>
      {childContent}
    </Accordion>
  );
};

describe("Accordion", () => {
  it("Toggles child content when clicked", async () => {
    const { queryByText } = renderComp();

    expect(queryByText(titleProp)).toBeInTheDocument();
    expect(queryByText(childContent)).not.toBeInTheDocument();

    fireEvent.click(queryByText(titleProp));

    expect(queryByText(childContent)).toBeInTheDocument();
    fireEvent.click(queryByText(titleProp));
    expect(queryByText(childContent)).not.toBeInTheDocument();
  });
});
