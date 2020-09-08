import React from "react";
import { Dimensions } from "react-native";
import { render, cleanup } from "@testing-library/react-native";
import { Spacer } from "@components/index";

afterEach(cleanup);

describe("<Spacer />", () => {
  it("should match snapshot", () => {
    const rendered = render(<Spacer />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should fill the entire width", () => {
    const rendered = render(<Spacer />);
    const container = rendered.getByTestId("spacer");

    expect(container.props.style).toMatchObject({
      width: Dimensions.get("screen").width,
    });
  });
});
