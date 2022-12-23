import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  //   beforeEach => Her testten önce çalıştırır.
  beforeEach(() => {
    console.log("Her testten önce çalışacağım");
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("En başta bir kere çalışacağım");
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım");
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
