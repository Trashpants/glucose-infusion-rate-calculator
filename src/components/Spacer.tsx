import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

export default function Spacer() {
  const styles = StyleSheet.create({
    container: {
      padding: 12,
      width: Dimensions.get("screen").width,
    },
  });

  return <View testID="spacer" style={styles.container} />;
}

export { Spacer };
