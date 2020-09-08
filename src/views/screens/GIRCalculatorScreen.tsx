import React from "react";
import { StyleSheet, View } from "react-native";
import { HorizontalCardPicker, FormLabel } from "@components/index";

const kgWeights = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GIRCalculatorScreen() {
  const styles = StyleSheet.create({
    container: {},
  });

  return (
    <View style={styles.container}>
      <FormLabel>Childs Weight</FormLabel>
      <HorizontalCardPicker
        items={kgWeights}
        measurement="KG"
        onPress={(weightVal) => {
          console.log(weightVal);
        }}
      />
    </View>
  );
}

export { GIRCalculatorScreen };
