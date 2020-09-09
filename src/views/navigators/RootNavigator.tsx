import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DarkTheme, LightTheme } from "@utilities/Colors";
import { GIRCalculatorScreen } from "@screens/index";

export default function RootNavigator() {
  const scheme = useColorScheme();
  const Stack = createStackNavigator();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
        <Stack.Navigator initialRouteName="GIRCalculator">
          <Stack.Screen
            options={{ title: "Glucose Infusion Rate" }}
            name="GIRCalculator"
            component={GIRCalculatorScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export { RootNavigator };
