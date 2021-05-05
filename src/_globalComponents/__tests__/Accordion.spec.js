import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Accordion from "../Accordion";

describe("Accordion", () => {
  const titleProp = "Test Accordion";
  const childContent = "Child Content";

  const renderComp = (overrides) => {
    return render(
      <Accordion title={titleProp} open={false} {...overrides}>
        {childContent}
      </Accordion>
    );
  };

  it("Toggles child content when clicked", () => {
    const { queryByText } = renderComp();

    expect(queryByText(titleProp)).toBeInTheDocument();
    expect(queryByText(childContent)).not.toBeInTheDocument();

    fireEvent.click(queryByText(titleProp));

    expect(queryByText(childContent)).toBeInTheDocument();
    fireEvent.click(queryByText(titleProp));
    expect(queryByText(childContent)).not.toBeInTheDocument();
  });
});
