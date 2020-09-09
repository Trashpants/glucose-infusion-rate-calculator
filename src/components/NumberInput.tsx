import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";

interface NumberInputProps {
  onChange: (value: number) => void;
  length: number;
  ending: string;
}

const NumberInput: FunctionComponent<NumberInputProps> = ({
  length,
  ending,
  onChange,
}) => {
  /**
   * As RN doesnt have a nice way to update 'masked' components
   * we hide the input and just display the typed value...
   * Otherwise you get janky entry with numbers appearing / disappearing
   */

  const [value, setValue] = useState<string>("00");
  const [isFocused, setFocused] = useState<boolean>(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-end",
      paddingHorizontal: 12,
    },
    inputContainer: {
      borderColor: theme.colors.border,
      borderBottomWidth: 2,
      paddingRight: 6,
    },
    focused: {
      borderColor: theme.colors.text,
    },
    input: {
      fontSize: 72,
      fontWeight: "100",
      textAlign: "right",
      color: theme.colors.text,
    },
    hiddenInput: {
      backgroundColor: "#abc",
      position: "absolute",
      opacity: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    end: {
      fontSize: 24,
      paddingLeft: 6,
      paddingRight: 96,
      paddingBottom: 18,
      color: theme.colors.text,
      fontWeight: "600",
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        maxLength={length + 1}
        keyboardType="number-pad"
        style={styles.hiddenInput}
        value={value}
        onChangeText={(v) => {
          setValue(formatNumber(v, value));
          onChange(parseInt(formatNumber(v, value), 10));
        }}
      />
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
        <Text style={styles.input}>{value}</Text>
      </View>
      <Text style={styles.end} numberOfLines={1} adjustsFontSizeToFit>
        {ending}
      </Text>
    </View>
  );
};

const formatNumber = (newValue: string, currentValue: string) => {
  const parsedVal = parseInt(newValue, 10);
  if (parsedVal < 10) {
    return `0${parsedVal}`;
  }
  if (newValue.length === 3 && newValue[0] === "0") {
    return newValue.slice(1, 3);
  }

  if (newValue.length === 3 && newValue[0] !== "0") {
    return currentValue;
  }
  return newValue;
};

export { NumberInput };
