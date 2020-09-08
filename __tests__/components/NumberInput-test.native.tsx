import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import { NumberInput } from "@components/index";

afterEach(cleanup);

describe("<NumberInput />", () => {
  it("should match snapshot", () => {
    const rendered = render(
      <NumberInput
        onChange={(v) => {
          console.log(v);
        }}
        length={2}
        ending="%"
      />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
