import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { FormLabel } from "@components/index";

afterEach(cleanup);

describe("<HorizontalCardPicker />", () => {
  it("should match snapshot", () => {
    const rendered = render(<FormLabel>label</FormLabel>).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should display the label provided as a child", () => {
    const rendered = render(<FormLabel>Title</FormLabel>);
    const label = rendered.getByTestId("label");

    expect(label.props.children).toEqual("Title");
  });
});
