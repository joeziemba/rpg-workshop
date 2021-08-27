import React from "react"
import { render } from "@testing-library/react"

import Column from "../Column"

describe("Column", () => {
  const classProp = "test-class"
  const childContent = "Child Content"

  const mountComp = (overrides) => {
    return render(
      <Column className={classProp} {...overrides}>
        {childContent}
      </Column>
    )
  }

  it("displays child content", () => {
    const { getByText } = mountComp()
    expect(getByText(childContent)).toBeInTheDocument()
  })
})
