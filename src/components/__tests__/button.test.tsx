import React from "react"
import renderer from "react-test-renderer";

import Button from "../button"

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button href="https://www.google.co.uk/">Test</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
