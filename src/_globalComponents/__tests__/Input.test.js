import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Input from "../Input";

const changeSpy = jest.fn();

describe("Input", () => {
  const testProps = {
    type: "text",
    id: "testId",
    placeholder: "test placeholder",
    onChange: changeSpy,
    value: "Test Value",
    fieldName: "testFieldName",
    label: "Test Label",
  };

  const mountComponent = (overrides) => {
    return render(<Input {...testProps} {...overrides} />);
  };

  it("can type in the input", () => {
    const { getByLabelText, getByPlaceholderText } = mountComponent();

    expect(getByPlaceholderText("test placeholder")).toBeInTheDocument();

    fireEvent.change(getByLabelText("Test Label"), {
      target: { value: "sample text" },
    });

    expect(changeSpy).toHaveBeenCalled();
  });
});
