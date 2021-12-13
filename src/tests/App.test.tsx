import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "../App/App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello World!/i)
  expect(linkElement).toBeInTheDocument()
})
