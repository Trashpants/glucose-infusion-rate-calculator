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
      paddingTop: 12,
      paddingBottom: 6,
      paddingHorizontal: 12,
      fontWeight: "600",
      fontSize: 16,
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
