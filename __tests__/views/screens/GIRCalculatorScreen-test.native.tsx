import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { GIRCalculatorScreen } from "@screens/index";

afterEach(cleanup);

describe("<GIRCalculator />", () => {
  it("should match snapshot", () => {
    const rendered = render(<GIRCalculatorScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
