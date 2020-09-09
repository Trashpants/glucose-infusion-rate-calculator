import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Constants from "expo-constants";
import { Spacer } from "@components/index";
import { useTheme } from "@react-navigation/native";

export default function GIRCalculatorScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: Constants.statusBarHeight,
    },
    title: {
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Spacer />
        <Text style={styles.title}>PedGIR</Text>
        <Text>Original Concept:</Text>
        <Text>Rageen Rajendram</Text>
        <Text>Designed and Developed by</Text>
        <Text>Nash Bansal</Text>
      </ScrollView>
    </View>
  );
}

export { GIRCalculatorScreen };
