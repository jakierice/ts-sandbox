import { sum } from "./main"

describe("sum", () => {
  it("adds two numbers together", () => {
    const a = 1
    const b = 2

    expect(sum(a)(b)).toEqual(3)
  })
})
