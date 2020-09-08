import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

interface FormLabelProps {
  children: string;
}

const FormLabel: FunctionComponent<FormLabelProps> = ({ children }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    label: {
      padding: 12,
      fontWeight: "600",
      fontSize: 24,
      color: theme.colors.text,
    },
  });
  return (
    <Text testID="label" style={styles.label}>
      {children}
    </Text>
  );
};

export { FormLabel };
