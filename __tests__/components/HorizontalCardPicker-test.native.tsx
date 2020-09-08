import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react-native";
import { HorizontalCardPicker } from "@components/index";

afterEach(cleanup);

describe("<HorizontalCardPicker />", () => {
  it("should match snapshot", () => {
    const rendered = render(
      <HorizontalCardPicker
        items={[1, 2, 3]}
        onPress={(v) => {
          console.log(v);
        }}
        measurement="KG"
      />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("returns a value when pressed", () => {
    const onPress = jest.fn();
    const rendered = render(
      <HorizontalCardPicker
        items={[1, 2, 3]}
        onPress={onPress}
        measurement="KG"
      />
    );
    const buttonComponent = rendered.getAllByTestId("button");

    fireEvent(buttonComponent[0], "press");

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
